import { CustomerSaveDto } from 'src/customers/dto/customer.save-dto';
import { PositionSaveDto } from 'src/positions/dto/position.save-dto';

export class CartSaveDto {
  customer: CustomerSaveDto;
  positions: PositionSaveDto[];
}
