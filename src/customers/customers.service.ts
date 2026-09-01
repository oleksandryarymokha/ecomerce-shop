import { Injectable } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';
import { Customer } from './customer.entity';
import { CustomerSaveDto } from './dto/customer.save-dto';
import { CustomerDto } from './dto/customer.dto';
import { CustomersMapper } from './dto/customer.mapper';
import { CustomerUpdateDto } from './dto/customer.update-dto';

@Injectable()
export class CustomersService {
  constructor(
    private readonly customerRepository: CustomersRepository,
    private readonly mapper: CustomersMapper,
  ) {}

  async create(customerSaveDto: CustomerSaveDto): Promise<CustomerDto> {
    const entity = this.mapper.mapDtoToEntity(customerSaveDto);
    entity.isActive = true;
    await this.customerRepository.save(entity);
    return this.mapper.mapEntityToDto(entity);
  }

  async getAllCustomers(): Promise<CustomerDto[]> {
    return this.mapper.mapEntityListToDtoList(
      await this.customerRepository.findAllActive(),
    );
  }

  async getActiveEntityById(id: number): Promise<Customer> {
    const customer: Customer | null =
      await this.customerRepository.findById(id);
    if (!customer || !customer.isActive) {
      throw new Error('Customer is not found');
    }
    return customer;
  }

  async getActiveCustomerDtoById(id: number): Promise<CustomerDto> {
    const customer: Customer = await this.getActiveEntityById(id);
    return this.mapper.mapEntityToDto(customer);
  }

  async updatePhone(id: number, update: CustomerUpdateDto): Promise<void> {
    const customer: Customer = await this.getActiveEntityById(id);
    customer.phone = update.newPhone;
    await this.customerRepository.save(customer);
  }

  async deleteById(id: number): Promise<void> {
    const customer: Customer = await this.getActiveEntityById(id);
    customer.isActive = false;
    await this.customerRepository.save(customer);
  }
}
