import { DeleteResult, UpdateResult } from "typeorm";
import { Data } from "../../entities/data.entity";

export interface IDataRepo {
  save: (data: Data) => Promise<Data>;
  getAll: () => Promise<Data[]>;
  retrieve: (payload: object) => Promise<Data | null>;
  update: (id: string, payload: Partial<Data>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
