import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ProductSaveDto } from './dto/product.save-dto';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() productSaveDto: ProductSaveDto): Promise<ProductDto> {
    return this.service.create(productSaveDto);
  }

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.service.getAllProducts();
  }

  @Get(':id')
  getProductById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Product | null> {
    return this.service.findById(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: Product,
  ): Promise<void> {
    await this.service.update(id, product);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.service.deleteById(id);
  }
}
