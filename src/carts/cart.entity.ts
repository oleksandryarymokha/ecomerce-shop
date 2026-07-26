import { Position } from '../positions/position.entity';
import { Customer } from '../customers/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ManyToOne((): typeof Customer => Customer, { nullable: false })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => Position, (position) => position.cart)
  positions: Position[];

  @Column({
    name: 'total_price',
    nullable: false,
    type: 'decimal',
    unique: false,
  })
  totalPrice: number;
}
