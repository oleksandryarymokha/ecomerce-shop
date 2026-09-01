import { forwardRef, Module } from '@nestjs/common';
import { CartsController } from './carts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { CartService } from './carts.service';
import { CartsRepository } from './carts.repository';
import { PositionModule } from 'src/positions/positions.module';
import { CartsMapper } from './dto/cart.mapper';
import { CustomerModule } from 'src/customers/customers.module';

@Module({
  controllers: [CartsController],
  providers: [CartService, CartsRepository, CartsMapper],
  imports: [
    TypeOrmModule.forFeature([Cart]),
    forwardRef(() => PositionModule),
    CustomerModule,
  ],
  exports: [CartsMapper],
})
export class CartModule {}
