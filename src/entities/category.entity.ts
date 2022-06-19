import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  OneToMany,
} from "typeorm";

import { CelestialBody } from "./celestialBody.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;
  @Column({ unique: true })
  name: string;
  @Column({ nullable: true })
  description: string;

  @OneToMany((type) => CelestialBody, (celestialBody) => celestialBody.category)
  celestial_bodies: CelestialBody[];
}
