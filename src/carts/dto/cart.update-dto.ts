import { CustomerDto } from 'src/customers/dto/customer.dto';
import { PositionDto } from 'src/positions/dto/position.dto';

export class CartUpdateDto {
  id: number;
  customer: CustomerDto;
  positions: PositionDto[];
}
