import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Cosmonaut } from "./cosmonaut.entity";
import { CelestialBody } from "./celestialBody.entity";

@Entity()
export class Galaxy {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;
  @Column()
  name: string;
  @Column()
  description: string;

  @ManyToOne((type) => Cosmonaut, (cosmonaut) => cosmonaut.created_bodies, {
    eager: true,
  })
  creator: Cosmonaut;

  @OneToMany((type) => CelestialBody, (celestialBody) => celestialBody.galaxy)
  celestial_bodies: CelestialBody[];
}
