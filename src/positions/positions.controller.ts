import { Position } from './position.entity';
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
  Query,
} from '@nestjs/common';
import { PositionDto } from './dto/position.dto';
import { PositionSaveDto } from './dto/position.save-dto';
import { PositionsService } from './positions.service';
import { PositionUpdateDto } from './dto/position.update-dto';

@Controller('positions')
export class PositionsController {
  constructor(private readonly service: PositionsService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() position: PositionSaveDto): Promise<PositionDto> {
    return this.service.create(position);
  }

  @Get()
  async getAll(
    @Query('cart-id', ParseIntPipe) cartId: number,
  ): Promise<PositionDto[]> {
    return await this.service.getAllPositionsByCartId(cartId);
  }

  @Get(':id')
  async getPositionById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<PositionDto> {
    return await this.service.findPositionDtoById(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: PositionUpdateDto,
  ): Promise<void> {
    await this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.delete(id);
  }
}
