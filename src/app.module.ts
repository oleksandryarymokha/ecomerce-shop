import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CustomerModule } from './customers/customers.module';
import { PositionModule } from './positions/positions.module';
import { CartModule } from './carts/carts.module';

@Module({
  imports: [ProductsModule, CustomerModule, PositionModule, CartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
