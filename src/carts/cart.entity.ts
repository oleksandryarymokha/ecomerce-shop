import { Position } from '../positions/position.entity';
import { Customer } from '../customers/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @ManyToOne((): typeof Customer => Customer, { nullable: false })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
  positions: Position[];
  @Column('total_price')
  totalPrice: number;
}
