import { Product } from '../products/product.entity';
import { Cart } from '../carts/cart.entity';

//@Entity('positions')
export class Position {
  id: number;
  product: Product;
  quantity: number;
  cart: Cart;
}
