import { Category } from '../enum/category.enum';

export class ProductSaveDto {
  name: string;
  price: number;
  category: Category;
}
