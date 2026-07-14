import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CustomerModule } from './customers/customer.module';
import { PositionModule } from './positions/position.module';
import { CartModule } from './carts/cart.module';

@Module({
  imports: [ProductsModule, CustomerModule, PositionModule, CartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
