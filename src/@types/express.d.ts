import { Category, CelestialBody, Cosmonaut, Data } from "../entities";

declare global {
  namespace Express {
    interface Request {
      validData: Cosmonaut | Category | Data | CelestialBody; //adicionar | Categories | OutroEntity
      category: Category;
    }
  }
}
