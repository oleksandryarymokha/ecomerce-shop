import { Controller, Get, Post } from '@nestjs/common';
import { Product } from './product.entity';
import { Category } from './enum/category.enum';

@Controller('products')
export class ProductController {
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

  @Post()
  create(category: Category, name: string, price: number): Product {
    const product: Product = new Product();
    product.name = name;
    product.category = category;
    product.price = price;
    return product;
  }
}
