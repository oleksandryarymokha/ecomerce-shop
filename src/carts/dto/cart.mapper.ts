import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Cart } from '../cart.entity';
import { CartDto } from './cart.dto';
import { CartSaveDto } from './cart.save-dto';
import { CustomersMapper } from 'src/customers/dto/customer.mapper';
import { PositionsMapper } from 'src/positions/dto/position.mapper';
import { Customer } from 'src/customers/customer.entity';
import { Position } from 'src/positions/position.entity';
import { PositionSaveDto } from 'src/positions/dto/position.save-dto';

@Injectable()
export class CartsMapper {
  constructor(
    @Inject(forwardRef(() => PositionsMapper))
    private readonly positionsMapper: PositionsMapper,
    private readonly customersMapper: CustomersMapper,
  ) {}
  mapEntityToDto(entity: Cart): CartDto {
    if (!entity) {
      return new CartDto();
    }

    const dto: CartDto = new CartDto();
    dto.id = entity.id;
    dto.customer = this.customersMapper.mapEntityToDto(entity.customer);
    dto.positions = this.positionsMapper.mapEntityListToDtoList(
      entity.positions,
    );
    return dto;
  }

  mapDtoToEntity(
    saveDto: CartSaveDto,
    customer: Customer,
    positions: Position[], // вопрос по типам
  ): Cart {
    const entity: Cart = new Cart();
    entity.customer = customer;
    entity.positions = positions;
    return entity;
  }

  mapEntityListToDtoList(entityList: Cart[]): CartDto[] {
    return entityList.map((cart: Cart): CartDto => this.mapEntityToDto(cart));
  }
}
