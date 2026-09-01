import { Injectable } from '@nestjs/common';
import { Product } from '../product.entity';
import { ProductDto } from './product.dto';
import { ProductSaveDto } from './product.save-dto';

@Injectable()
export class ProductsMapper {
  mapEntityToDto(entity: Product): ProductDto {
    if (!entity) {
      return new ProductDto();
    }

    const dto: ProductDto = new ProductDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.category = entity.category;
    dto.price = entity.price;
    return dto;
  }

  mapDtoToEntity(saveDto: ProductSaveDto): Product {
    const entity: Product = new Product();
    entity.name = saveDto.name;
    entity.category = saveDto.category;
    entity.price = saveDto.price;
    return entity;
  }

  mapEntityListToDtoList(entityList: Product[]): ProductDto[] {
    return entityList.map((product: Product): ProductDto =>
      this.mapEntityToDto(product),
    );
  }
}