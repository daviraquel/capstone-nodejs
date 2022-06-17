import { Cosmonaut } from "../entities";
import { Category } from "../entities/category.entity";

declare global {
  namespace Express {
    interface Request {
      validData: Cosmonaut | Category; //adicionar | Categories | OutroEntity
      category: Category;
    }
  }
}
