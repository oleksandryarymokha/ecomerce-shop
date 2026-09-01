import { forwardRef, Module } from '@nestjs/common';
import { PositionsController } from './positions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './position.entity';
import { PositionsService } from './positions.service';
import { PositionsRepository } from './positions.repository';
import { PositionsMapper } from './dto/position.mapper';
import { ProductsModule } from 'src/products/products.module';
import { CartModule } from 'src/carts/carts.module';

@Module({
  controllers: [PositionsController],
  providers: [PositionsService, PositionsRepository, PositionsMapper],
  imports: [
    ProductsModule,
    forwardRef(() => CartModule),
    TypeOrmModule.forFeature([Position]),
  ],
  exports: [PositionsMapper],
})
export class PositionModule {}
