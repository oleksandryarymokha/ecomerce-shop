import { Product } from '../products/product.entity';
import { Cart } from '../carts/cart.entity';

export class Position {
  id: number;
  product: Product;
  quantity: number;
  cart: Cart;
}
