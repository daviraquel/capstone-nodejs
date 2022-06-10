import {
  Entity,
  Column,
  PrimaryColumn,
  //importar relacionamentos
  //ManyToMany
  //JoinTable
} from "typeorm";
import { v4 as uuid } from "uuid";

//import {CelestialBody} from "./celestialBody.entity"

@Entity()
export class Cosmonaut {
  @PrimaryColumn("uuid")
  readonly id: string;

  // @OneToOne((type) => CelestialBody, {
  //     eager: true,
  //   })
  //   @JoinColumn()
  //   body_id: CelestialBody.id; (VERIFICAR FORMA DE RELAÇÃO)

  @Column()
  description: string;
  @Column()
  mass: number;
  @Column()
  volume: number;
  @Column()
  distance_to_earth: number;
  @Column()
  last_update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.last_update) {
      this.last_update = new Date();
    }
  }
}
