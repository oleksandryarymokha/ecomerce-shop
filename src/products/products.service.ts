import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  private readonly productRepository: ProductsRepository;

  async create(product: Product): Promise<Product> {
    return await this.productRepository.save(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAllActive();
  }

  async findById(id: number): Promise<Product | null> {
    return await this.productRepository.findById(id);
  }
}
