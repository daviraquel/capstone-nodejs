import {
  Entity,
  Column,
  PrimaryColumn,
  //ManyToMany
  //JoinTable
} from "typeorm";
import { v4 as uuid } from "uuid";
//import {CelestialBody} from "./celestialBody.entity"

//importar entities relacionadas

@Entity()
export class Cosmonaut {
  @PrimaryColumn("uuid")
  readonly id: string;
  @Column()
  user_name: string;
  @Column()
  email: string;
  @Column()
  password: string;

  // @ManyToMany((type) => CelestialBody, { eager: true })
  // @JoinTable()
  // studied_bodies: CelestialBody[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
