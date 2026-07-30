import { Cart } from './cart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CartsRepository {
  constructor(
    @InjectRepository(Cart)
    private readonly repository: Repository<Cart>,
  ) {}

  async save(cart: Cart): Promise<Cart> {
    return await this.repository.save(cart);
  }

  async findAllActiveCarts(): Promise<Cart[]> {
    return await this.repository.findBy({});
  }

  async findById(id: number): Promise<Cart[]> {
    return await this.repository.findBy({ id });
  }

  async update(id: number, cart: Cart): Promise<void> {
    return await this.repository.update(id, cart);
  }
}
