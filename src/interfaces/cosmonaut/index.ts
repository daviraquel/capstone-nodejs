import { DeleteResult, UpdateResult } from "typeorm";
import { Cosmonaut } from "../../entities/cosmonaut.entity";

export interface ICosmonautCreate {
  user_name: string;
  email: string;
  password: string;
}

export interface ICosmonautRepo {
  save: (user: Cosmonaut) => Promise<Cosmonaut>;
  getAll: () => Promise<Cosmonaut[]>;
  retrieve: (payload: object) => Promise<Cosmonaut | null>;
  update: (id: string, payload: Partial<Cosmonaut>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
