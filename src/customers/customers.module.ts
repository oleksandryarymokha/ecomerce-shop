import { Module } from '@nestjs/common';
import { CustomerController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';
import { CustomersRepository } from './customers.repository';
import { CustomersMapper } from './dto/customer.mapper';

@Module({
  controllers: [CustomerController],
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomersService, CustomersRepository, CustomersMapper],
  exports: [CustomersMapper],
})
export class CustomerModule {}
