import { Category } from './enum/category.enum';

export class Product {
  id: number;
  category: Category;
  name: string;
  price: number;
  isActive: boolean;
}
