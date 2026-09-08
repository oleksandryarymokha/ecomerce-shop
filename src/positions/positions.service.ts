import { Injectable } from '@nestjs/common';
import { PositionsRepository } from './positions.repository';
import { Position } from './position.entity';
import { PositionSaveDto } from './dto/position.save-dto';
import { PositionsMapper } from './dto/position.mapper';
import { PositionDto } from './dto/position.dto';
import { PositionUpdateDto } from './dto/position.update-dto';
import { ProductsService } from 'src/products/products.service';
import { CartService } from 'src/carts/carts.service';
import { Cart } from 'src/carts/cart.entity';
import { Product } from 'src/products/product.entity';

@Injectable()
export class PositionsService {
  constructor(
    private readonly mapper: PositionsMapper,
    private readonly positionRepository: PositionsRepository,
    private readonly productService: ProductsService,
    private readonly cartService: CartService,
  ) {}

  async create(positionSaveDto: PositionSaveDto): Promise<PositionDto> {
    const position: Position = this.mapper.mapDtoToEntity(positionSaveDto);
    const product: Product = await this.productService.findEntityById(
      positionSaveDto.productId,
    );
    const cart: Cart = await this.cartService.findEntityById(
      positionSaveDto.cartId,
    );

    position.product = product;
    position.cart = cart;
    await this.positionRepository.save(position);
    return this.mapper.mapEntityToDto(position);
  }

  async getAllPositionsByCartId(cartId: number): Promise<PositionDto[]> {
    return this.mapper.mapEntityListToDtoList(
      await this.positionRepository.findAll(cartId),
    );
  }

  async findEntityById(id: number): Promise<Position> {
    const foundPosition = await this.positionRepository.findById(id);
    if (!foundPosition) {
      throw new Error();
    }
    return foundPosition;
  }

  async findEntitiesByIds(ids: number[]): Promise<Position[]> {
    const foundPositions: Position[] = [];

    for (const id of ids) {
      const position = await this.findEntityById(id);
      foundPositions.push(position);
    }
    if (!foundPositions) {
      throw new Error();
    }
    return foundPositions;
  }

  async getAllPositions(cartId: number): Promise<PositionDto[]> {
    const entities = await this.positionRepository.findAll(cartId);
    return this.mapper.mapEntityListToDtoList(entities);
  }

  async findPositionDtoById(id: number): Promise<PositionDto> {
    const foundPosition = await this.findEntityById(id);
    // if (!foundPosition.isActive) {
    //   throw new Error();
    // }
    return this.mapper.mapEntityToDto(foundPosition);
  }

  async update(id: number, update: PositionUpdateDto): Promise<void> {
    const entity = await this.findEntityById(id);
    entity.quantity = update.newQuantity;
    await this.positionRepository.save(entity);
  }

  async deleteById(id: number): Promise<void> {
    await this.positionRepository.deleteById(id);
  }
}
