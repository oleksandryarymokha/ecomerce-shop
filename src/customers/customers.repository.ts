import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}
  async save(customer: Customer): Promise<Customer> {
    return this.repository.save(customer);
  }
  async findAllActive(): Promise<Customer[]> {
    return this.repository.findBy({ isActive: true });
  }
  async findById(id: number): Promise<Customer | null> {
    return this.repository.findOneBy({ id });
  }
  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
