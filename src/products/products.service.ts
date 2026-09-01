import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductsRepository) {}

  async create(product: Product): Promise<Product> {
    product.isActive = true;
    return await this.productRepository.save(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAllActive();
  }

  async findById(id: number): Promise<Product | null> {
    return await this.productRepository.findById(id);
  }

  async update(id: number, product: Product): Promise<void> {
    const foundProduct = await this.findById(id);
    if (foundProduct !== null) {
      foundProduct.price = product.price;
      await this.productRepository.save(foundProduct);
    }
  }

  async deleteById(id: number): Promise<void> {
    await this.productRepository.deleteById(id);
  }
}
