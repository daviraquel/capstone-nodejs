import { Cosmonaut } from "../entities";

declare global {
  namespace Express {
    interface Request {
      validData: Cosmonaut; //adicionar | Categories | OutroEntity
    }
  }
}
