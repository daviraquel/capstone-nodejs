import { DeleteResult, UpdateResult } from "typeorm";
import { CelestialBody } from "../../entities/celestialBody.entity";

export interface ICelestialBodyRepo {
  save: (celestialBody: CelestialBody) => Promise<CelestialBody>;
  getAll: () => Promise<CelestialBody[]>;
  retrieve: (payload: object) => Promise<CelestialBody | null>;
  update: (
    id: string,
    payload: Partial<CelestialBody>
  ) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
