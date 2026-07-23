import { Module } from '@nestjs/common';
import { CustomerController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';

@Module({
  controllers: [CustomerController],
  imports: [TypeOrmModule.forFeature([Customer])],
})
export class CustomerModule {}
