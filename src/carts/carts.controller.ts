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

@Controller('carts')
export class CartsController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() cart: Cart): Promise<Cart> {
    return await this.cartService.create(cart);
  }

  @Get()
  async getAll(): Promise<Cart[]> {
    return await this.cartService.findAllCarts();
  }

  @Get(':id')
  async getCartById(@Param('id', ParseIntPipe) id: number): Promise<Cart[]> {
    return await this.cartService.findById(id);
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
  deleteById(@Param('id', ParseIntPipe) id: number): void {
    console.log('Delete id:', id);
  }
}
