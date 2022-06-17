import { Category, Cosmonaut, Data } from "../entities";

declare global {
  namespace Express {
    interface Request {
      validData: Cosmonaut | Category | Data; //adicionar | Categories | OutroEntity
      category: Category;
    }
  }
}
