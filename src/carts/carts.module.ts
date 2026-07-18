import { Module } from '@nestjs/common';
import { CartController } from './carts.controller';

@Module({
  controllers: [CartController],
})
export class CartModule {}
