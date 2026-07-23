import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}
  async save(product: Product): Promise<Product> {
    return this.repository.save(product);
  }
  async findAllActive(): Promise<Product[]> {
    return this.repository.findBy({ isActive: true });
  }
  async findById(id: number): Promise<Product | null> {
    return this.repository.findOneBy({ id });
  }
  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
