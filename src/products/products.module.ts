import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductsMapper } from './dto/product.mapper';

@Module({
  controllers: [ProductsController],
  providers: [ProductsRepository, ProductsService, ProductsMapper],
  imports: [TypeOrmModule.forFeature([Product])],
  exports: [ProductsMapper],
})
export class ProductsModule {}
