import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, unique: false })
  name: string;
  @Column({ name: 'email', nullable: false, unique: true })
  email: string;
  @Column({ name: 'phone', nullable: false, unique: true })
  phone: string;
  @Column({ name: 'isActive', nullable: false, unique: false })
  isActive: boolean;
}
