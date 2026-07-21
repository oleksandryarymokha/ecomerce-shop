import { Product } from '../products/product.entity';
import { Cart } from '../carts/cart.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

//@Entity('positions')
export class Position {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  product: Product;
  @Column()
  quantity: number;
  @ManyToOne((): typeof Cart => Cart)
  cart: Cart;
}
