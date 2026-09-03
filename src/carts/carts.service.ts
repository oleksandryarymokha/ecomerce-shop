import { Injectable } from '@nestjs/common';
import { Cart } from './cart.entity';
import { CartsRepository } from './carts.repository';
import { CartSaveDto } from './dto/cart.save-dto';
import { CartDto } from './dto/cart.dto';
import { CartsMapper } from './dto/cart.mapper';

@Injectable()
export class CartService {
  constructor(
    private readonly repository: CartsRepository,
    private readonly mapper: CartsMapper,
  ) {}

  async create(cartSaveDto: CartSaveDto): Promise<CartDto> {
    const entity = this.mapper.mapDtoToEntity(cartSaveDto);
    entity.isActive = true;
    await this.repository.save(entity);
    return this.mapper.mapEntityToDto(entity);
  }

  async findAllCarts(): Promise<CartDto[]> {
    return this.mapper.mapEntityListToDtoList(
      await this.repository.findAllActiveCarts(),
    );
  }

  async findCartDtoById(id: number): Promise<CartDto> {
    const entity = await this.findEntityById(id);
    if (!entity.isActive) throw new Error();
    return this.mapper.mapEntityToDto(entity);
  }

  async findEntityById(id: number): Promise<Cart> {
    const entity: Cart | null = await this.repository.findById(id);
    if (!entity) throw new Error();
    return entity;
  }

  async update(id: number, cart: Cart): Promise<void> {
    await this.repository.update(id, cart);
  }

  async delete(id: number): Promise<void> {
    const entity = await this.findEntityById(id);
    entity.isActive = false;
    await this.repository.save(entity);
  }
}
