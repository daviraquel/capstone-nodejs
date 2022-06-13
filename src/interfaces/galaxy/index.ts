import { DeleteResult, UpdateResult } from "typeorm";
import { Galaxy } from "../../entities/galaxy.entity";

export interface IGalaxyRepo {
  save: (galaxy: Galaxy) => Promise<Galaxy>;
  getAll: () => Promise<Galaxy[]>;
  retrieve: (payload: object) => Promise<Galaxy | null>;
  update: (id: string, payload: Partial<Galaxy>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
