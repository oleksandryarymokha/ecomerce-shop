import { Injectable } from '@nestjs/common';
import { Cart } from './cart.entity';
import { CartsRepository } from './carts.repository';

@Injectable()
export class CartService {
  private readonly cartRepository: CartsRepository;
  async getCartById(cartId: number): Promise<Cart[]> {
    return await this.cartRepository.findById(cartId);
  }

  async findAllCarts(): Promise<Cart[]> {
    return await this.cartRepository.findAllActiveCarts();
  }

  async findById(id: number): Promise<Cart[]> {
    return await this.cartRepository.findById(id);
  }

  async create(cart: Cart): Promise<Cart> {
    return await this.cartRepository.save(cart);
  }

  async update(id: number, cart: Cart): Promise<void> {
    await this.cartRepository.update(id, cart);
  }
}
