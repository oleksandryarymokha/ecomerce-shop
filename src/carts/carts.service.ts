import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Cart } from './cart.entity';
import { CartsRepository } from './carts.repository';
import { CartSaveDto } from './dto/cart.save-dto';
import { CartDto } from './dto/cart.dto';
import { CartsMapper } from './dto/cart.mapper';
import { CustomersService } from 'src/customers/customers.service';
import { PositionsService } from 'src/positions/positions.service';
import { Customer } from 'src/customers/customer.entity';

@Injectable()
export class CartService {
  constructor(
    private readonly repository: CartsRepository,
    private readonly mapper: CartsMapper,
    private readonly customersService: CustomersService,
    @Inject(forwardRef(() => PositionsService))
    private readonly positionsService: PositionsService,
  ) {}

  async create(cartSaveDto: CartSaveDto): Promise<CartDto> {
    const customer: Customer = await this.customersService.getActiveEntityById(
      cartSaveDto.customerId,
    );

    const positions = await this.positionsService.findEntitiesByIds(
      cartSaveDto.positions,
    );
    const cartEntity = this.mapper.mapDtoToEntity(
      cartSaveDto,
      customer,
      positions,
    );
    cartEntity.isActive = true;
    await this.repository.save(cartEntity);
    return this.mapper.mapEntityToDto(cartEntity);
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
    if (!entity) throw new Error('Cart is not find');
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
