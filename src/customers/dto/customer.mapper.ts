import { Injectable } from '@nestjs/common';
import { Customer } from '../customer.entity';
import { CustomerDto } from './customer.dto';
import { CustomerSaveDto } from './customer.save-dto';

@Injectable()
export class CustomersMapper {
  mapEntityToDto(entity: Customer): CustomerDto {
    if (!entity) {
      return new CustomerDto();
    }

    const dto: CustomerDto = new CustomerDto();
    dto.id = entity.id;
    dto.name = entity.name;
    return dto;
  }

  mapDtoToEntity(saveDto: CustomerSaveDto): Customer {
    const entity: Customer = new Customer();
    entity.email = saveDto.email;
    entity.name = saveDto.name;
    entity.phone = saveDto.phone;
    return entity;
  }

  mapEntityListToDtoList(entityList: Customer[]): CustomerDto[] {
    return entityList.map((customer: Customer): CustomerDto =>
      this.mapEntityToDto(customer),
    );
  }
}
