import { Body, Controller, Post } from '@nestjs/common';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomerController {
  @Post()
  create(@Body() customer: Customer): Customer {
    console.log('Saved customer:', customer);
    return customer;
  }
}
