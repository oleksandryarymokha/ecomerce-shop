import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  async save(customer: Customer): Promise<Customer> {
    return this.repository.save(customer);
  }

  async getAllCustomers(): Promise<Customer[]> {
    return this.repository.find();
  }

  async getCustomerById(id: number): Promise<Customer | null> {
    return this.repository.findOneBy({ id });
  }
}
