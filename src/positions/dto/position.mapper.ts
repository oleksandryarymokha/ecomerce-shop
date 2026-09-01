import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { PositionDto } from './position.dto';
import { Position } from '../position.entity';
import { PositionSaveDto } from './position.save-dto';
import { CartsMapper } from 'src/carts/dto/cart.mapper';
import { ProductsMapper } from 'src/products/dto/product.mapper';

@Injectable()
export class PositionsMapper {
  constructor(
    @Inject(forwardRef(() => CartsMapper))
    private readonly cartsMapper: CartsMapper,
    private readonly productsMapper: ProductsMapper,
  ) {}

  mapEntityToDto(entity: Position): PositionDto {
    if (!entity) {
      return new PositionDto();
    }

    const dto: PositionDto = new PositionDto();
    dto.id = entity.id;
    dto.product = entity.product;
    dto.quantity = entity.quantity;
    dto.cart = entity.cart;
    return dto;
  }

  mapDtoToEntity(saveDto: PositionSaveDto): Position {
    const entity: Position = new Position();
    entity.product = this.productsMapper.mapDtoToEntity(saveDto.product);
    entity.quantity = saveDto.quantity;
    entity.cart = this.cartsMapper.mapDtoToEntity(saveDto.cart);
    return entity;
  }

  mapEntityListToDtoList(entityList: Position[]): PositionDto[] {
    return entityList.map((position: Position): PositionDto =>
      this.mapEntityToDto(position),
    );
  }

  mapDtoListToEntityList(dtoList: PositionSaveDto[]): Position[] {
    return dtoList.map((position: PositionSaveDto): Position =>
      this.mapDtoToEntity(position),
    );
  }
}
