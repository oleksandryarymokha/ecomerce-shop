import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './enum/category.enum';

export class Product {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'category',
    nullable: false,
    type: 'enum',
    enum: Category,
  })
  category: Category;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  isActive: boolean;
}
