import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';
import { ProductDto } from './dto/product.dto';
import { ProductSaveDto } from './dto/product.save-dto';
import { ProductsMapper } from './dto/product.mapper';

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

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.findAllActive();
  }

  async findById(id: number): Promise<Product | null> {
    return await this.productRepository.findById(id);
  }

  async update(id: number, product: Product): Promise<void> {
    const foundProduct = await this.findById(id);
    if (foundProduct !== null) {
      foundProduct.price = product.price;
      await this.productRepository.save(foundProduct);
    }
  }

  async deleteById(id: number): Promise<void> {
    await this.productRepository.deleteById(id);
  }
}
