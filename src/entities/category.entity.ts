import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";

import { CelestialBody } from "./celestialBody.entity";

@Entity()
export class Category {
  @PrimaryColumn("uuid")
  readonly id: string;
  @Column()
  name: string;
  @Column()
  description: string;

  @OneToMany(
    (type) => CelestialBody,
    (celestialBody) => celestialBody.category,
    { eager: true }
  )
  celestial_bodies: CelestialBody[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
