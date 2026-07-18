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
import { Product } from '../products/product.entity';
import { Category } from '../products/enum/category.enum';
import { Cart } from '../carts/cart.entity';
import { Customer } from '../customers/customer.entity';

@Controller('positions')
export class PositionsController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() position: Position): Position {
    console.log('Saved position: ', position);
    return position;
  }

  @Get()
  getAll(@Query('cart-id', ParseIntPipe) cartId: number): Position[] {
    const prod1 = new Product();
    prod1.id = 1;
    prod1.name = 'Samsung Galaxy S24';
    prod1.category = Category.Smartphones;
    prod1.price = 1200;
    const cust1 = new Customer();
    cust1.name = 'John Snow';
    const cart1 = new Cart();
    cart1.id = cartId;
    cart1.customer = cust1;
    const pos1 = new Position();
    pos1.id = 1;
    pos1.product = prod1;
    pos1.quantity = 2;
    pos1.cart = cart1;
    return [pos1];
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: Position,
  ): void {
    console.log('Id:', id);
    console.log('Updated position:', payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number): void {
    console.log('Delete position by id: ', id);
  }
}
