import { Category } from '../enum/category.enum';

export class ProductDto {
  id: number;
  name: string;
  category: Category;
  price: number;
}
