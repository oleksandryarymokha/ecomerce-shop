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
import { Product } from './product.entity';
import { Category } from './enum/category.enum';

@Controller('products')
export class ProductsController {
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() product: Product): Product {
    const prod1: Product = new Product();
    prod1.name = product.name;
    prod1.category = product.category;
    prod1.price = product.price;
    return product;
  }

  @Get()
  getAllProducts(): Product[] {
    // временно возвращаем тестовый продукт
    const product1: {
      id: number;
      name: string;
      category: Category;
      price: number;
      isActive: boolean;
    } = {
      id: 1,
      name: 'Samsung Galaxy S24',
      category: Category.Smartphones,
      price: 1100,
      isActive: true,
    };
    const product2: {
      id: number;
      name: string;
      category: Category;
      price: number;
      isActive: boolean;
    } = {
      id: 2,
      name: 'Lenovo T14',
      category: Category.Laptops,
      price: 2000,
      isActive: true,
    };
    return [product1, product2];
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number): Product {
    const product: Product = new Product();
    product.name = 'Samsung Galaxy S24';
    product.price = 1200;
    product.category = Category.Smartphones;
    console.log('Products ID: ', id);
    return product;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: Product,
  ): void {
    console.log('Patched id: ', id);
    console.log('Patched product: ', product);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteById(@Param('id', ParseIntPipe) id: number): void {
    console.log('Deleted product by id: ', id);
  }
}
