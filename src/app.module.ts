import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CustomerModule } from './customers/customers.module';
import { PositionModule } from './positions/positions.module';
import { CartModule } from './carts/carts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// postgresql://postgres:qwerty123@localhost:5432

@Module({
  imports: [
    ProductsModule,
    CustomerModule,
    PositionModule,
    CartModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwerty123',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
