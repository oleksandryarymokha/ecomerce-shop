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
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomerController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() customer: Customer): Customer {
    console.log('Saved customer:', customer);
    return customer;
  }

  @Get()
  getAll(): Customer[] {
    const vasia: Customer = new Customer();
    vasia.name = 'Vasia';
    const petia: Customer = new Customer();
    petia.name = 'Petia';
    return [vasia, petia];
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number): Customer {
    const petia: Customer = new Customer();
    petia.name = 'Petia';
    console.log('Id:', id);
    return petia;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() customer: Customer,
  ): void {
    console.log('Id:', id);
    console.log('New:', customer);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteById(@Param('id', ParseIntPipe) id: number): void {
    console.log('Delete id:', id);
  }
}
