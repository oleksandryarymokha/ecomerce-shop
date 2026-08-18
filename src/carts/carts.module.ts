import { Module } from '@nestjs/common';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { CartService } from './carts.service';
import { CartsRepository } from './carts.repository';
import { PositionModule } from '../positions/positions.module';

@Module({
  controllers: [CartsController],
  imports: [TypeOrmModule.forFeature([Cart]), PositionModule],
  providers: [CartService, CartsRepository],
})
export class CartModule {}
