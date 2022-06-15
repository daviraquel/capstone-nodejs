import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";

import { Cosmonaut } from "./cosmonaut.entity";
import { CelestialBody } from "./celestialBody.entity";

@Entity()
export class Galaxy {
  @PrimaryColumn("uuid")
  readonly id: string;
  @Column()
  name: string;
  @Column()
  description: string;

  @ManyToOne((type) => Cosmonaut, (cosmonaut) => cosmonaut.created_bodies)
  creator: Cosmonaut;

  @OneToMany((type) => CelestialBody, (celestialBody) => celestialBody.galaxy, {
    eager: true,
  })
  celestial_bodies: CelestialBody[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
