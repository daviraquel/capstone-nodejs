import { Category, Cosmonaut, Data, Galaxy } from "../entities";

declare global {
  namespace Express {
    interface Request {
      validData: Cosmonaut | Category | Data; //adicionar | Categories | OutroEntity
      category: Category;
      galaxy: Galaxy;
    }
  }
}
