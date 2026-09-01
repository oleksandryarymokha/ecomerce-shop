import { CartDto } from 'src/carts/dto/cart.dto';
import { ProductDto } from 'src/products/dto/product.dto';

export class PositionDto {
  id: number;
  product: ProductDto;
  quantity: number;
  cart: CartDto;
}
