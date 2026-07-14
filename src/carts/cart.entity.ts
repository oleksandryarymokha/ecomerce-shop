import { Position } from '../positions/position.entity';

export class Cart {
  id: number;
  customerId: number;
  products: Position[];
  totalPrice: number;
}
