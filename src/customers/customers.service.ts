import { Injectable } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  private readonly customerRepository: CustomersRepository;

  async create(customer: Customer): Promise<Customer> {
    return await this.customerRepository.save(customer);
  }

  async getAllCutomers(): Promise<Customer[]> {
    return await this.customerRepository.getAllCustomers();
  }

  async getCustomerById(id: number): Promise<Customer | null> {
    return await this.customerRepository.getCustomerById(id);
  }
}
