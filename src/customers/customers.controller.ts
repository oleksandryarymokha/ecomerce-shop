import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomerSaveDto } from './dto/customer.save-dto';
import { CustomerDto } from './dto/customer.dto';
import { CustomersService } from './customers.service';
import { CustomerUpdateDto } from './dto/customer.update-dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly service: CustomersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() customerSaveDto: CustomerSaveDto): Promise<CustomerDto> {
    return await this.service.create(customerSaveDto);
  }

  @Get()
  async getAll(): Promise<CustomerDto[]> {
    return await this.service.getAllCustomers();
  }

  @Get(':id')
  async getCustomerById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CustomerDto> {
    return await this.service.getActiveCustomerDtoById(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() update: CustomerUpdateDto,
  ): Promise<void> {
    await this.service.updatePhone(id, update);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.service.deleteById(id);
  }
}
