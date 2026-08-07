import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './enum/category.enum';
@Entity('Products')
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

  @Column({ name: 'name', nullable: false, unique: true })
  name: string;

  @Column({ name: 'price', nullable: false, unique: false })
  price: number;

  @Column({ name: 'isActive', nullable: false, unique: false })
  isActive: boolean;
}
