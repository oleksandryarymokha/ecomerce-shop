import { Position } from '../positions/position.entity';
import { Customer } from '../customers/customer.entity';

export class Cart {
  id: number;
  customer: Customer;
  products: Position[];
  totalPrice: number;
}
