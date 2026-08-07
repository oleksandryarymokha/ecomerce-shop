import { Product } from '../products/product.entity';
import { Cart } from '../carts/cart.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('positions')
export class Position {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ManyToOne((): typeof Product => Product, { nullable: false })
  product: Product;

  @Column({ name: 'quantity', nullable: false, unique: false })
  quantity: number;

  @ManyToOne((): typeof Cart => Cart, (cart) => cart.positions)
  cart: Cart;
}
