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
import { Cart } from './cart.entity';
import { CartService } from './carts.service';
import { CartDto } from './dto/cart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() cart: Cart): Promise<CartDto> {
    return await this.cartService.create(cart);
  }

  @Get()
  async getAll(): Promise<CartDto[]> {
    return await this.cartService.findAllCarts();
  }

  @Get(':id')
  async getCartById(@Param('id', ParseIntPipe) id: number): Promise<CartDto> {
    return await this.cartService.findCartDtoById(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() cart: Cart,
  ): Promise<void> {
    return await this.cartService.update(id, cart);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.cartService.delete(id);
  }
}
