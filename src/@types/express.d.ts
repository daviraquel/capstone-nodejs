import { Category, CelestialBody, Cosmonaut, Data, Galaxy } from "../entities";

declare global {
  namespace Express {
    interface Request {
      validData: Cosmonaut | Category | Data | CelestialBody | Galaxy; //adicionar | Categories | OutroEntity
      category: Category;
      galaxy: Galaxy;
      celestialBody: CelestialBody;
      cosmonaut: Cosmonaut;
      data: Data;
      decoded: Cosmonaut;
    }
  }
}
