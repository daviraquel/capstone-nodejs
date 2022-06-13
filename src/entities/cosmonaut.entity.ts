import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { CelestialBody } from "./celestialBody.entity";
import { Galaxy } from "./galaxy.entity";

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

  @ManyToMany((type) => CelestialBody, { eager: true })
  @JoinTable()
  studied_bodies: CelestialBody[];

  @OneToMany(
    (type) => CelestialBody,
    (celestialBody) => celestialBody.creator,
    { eager: true }
  )
  created_bodies: CelestialBody[];

  @OneToMany((type) => Galaxy, (galaxy) => galaxy.creator, { eager: true })
  created_galaxies: Galaxy[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
