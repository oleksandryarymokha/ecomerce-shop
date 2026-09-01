import { CartSaveDto } from 'src/carts/dto/cart.save-dto';
import { ProductSaveDto } from 'src/products/dto/product.save-dto';

export class PositionSaveDto {
  product: ProductSaveDto;
  quantity: number;
  cart: CartSaveDto;
}
