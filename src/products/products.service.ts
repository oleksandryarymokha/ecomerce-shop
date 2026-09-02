import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';
import { ProductDto } from './dto/product.dto';
import { ProductSaveDto } from './dto/product.save-dto';
import { ProductsMapper } from './dto/product.mapper';
import { ProductUpdateDto } from './dto/product.update-dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productRepository: ProductsRepository,
    private readonly mapper: ProductsMapper,
  ) {}

  async create(productSaveDto: ProductSaveDto): Promise<ProductDto> {
    const entity = this.mapper.mapDtoToEntity(productSaveDto);
    entity.isActive = true;
    await this.productRepository.save(entity);
    return this.mapper.mapEntityToDto(entity);
  }

  async getAllProducts(): Promise<ProductDto[]> {
    const entities: Product[] = await this.productRepository.findAllActive();
    return this.mapper.mapEntityListToDtoList(entities);
  }

  async findEntityById(id: number): Promise<Product> {
    const foundProduct = await this.productRepository.findById(id);
    if (!foundProduct) {
      throw new Error();
    }
    return foundProduct;
  }

  async findActiveById(id: number): Promise<ProductDto> {
    const foundProduct = await this.findEntityById(id);
    if (!foundProduct.isActive) {
      throw new Error();
    }
    return this.mapper.mapEntityToDto(foundProduct);
  }

  async update(id: number, productUpdateDto: ProductUpdateDto): Promise<void> {
    const foundProduct = await this.findEntityById(id);
    foundProduct.price = productUpdateDto.newPrice;
    await this.productRepository.save(foundProduct);
  }

  async deleteById(id: number): Promise<void> {
    const foundProduct = await this.findEntityById(id);
    foundProduct.isActive = false;
    await this.productRepository.save(foundProduct);
  }
}
