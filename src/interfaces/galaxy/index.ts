import { DeleteResult, UpdateResult } from "typeorm";
import { Cosmonaut } from "../../entities/cosmonaut.entity";
import { Galaxy } from "../../entities/galaxy.entity";

export interface IGalaxyCreate {
  name: string;
  description: string;
  creator: Cosmonaut;
}
export interface IGalaxyUpdate {
  name: string;
  description: string;
}

export interface IGalaxyRepo {
  save: (galaxy: Galaxy) => Promise<Galaxy>;
  getAll: () => Promise<Galaxy[]>;
  retrieve: (payload: object) => Promise<Galaxy | null>;
  update: (id: string, payload: Partial<Galaxy>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
