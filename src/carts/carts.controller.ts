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
import { Customer } from '../customers/customer.entity';

  @Controller()
  @Get()
  getAll(): Cart[] {
    const vasiaCart: Cart = new Cart();
    vasiaCart.totalPrice = 500;
    return [vasiaCart];
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number): Cart {
    const vasiaCart: Cart = new Cart();
    vasiaCart.id = id;
    vasiaCart.customer = new Customer();
    console.log('Cart Id:', id);
    return vasiaCart;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Param('id', ParseIntPipe) id: number, @Body() cart: Cart): void {
    console.log('Id:', id);
    console.log('New:', cart);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteById(@Param('id', ParseIntPipe) id: number): void {
    console.log('Delete id:', id);
  }
}
