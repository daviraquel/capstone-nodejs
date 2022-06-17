import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { CelestialBody } from "./celestialBody.entity";

@Entity()
export class Data {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @OneToOne((type) => CelestialBody, {
    eager: true,
  })
  @JoinColumn()
  body_id: CelestialBody["id"];

  @Column()
  description: string;

  @Column()
  mass: number;

  @Column()
  volume: number;

  @Column()
  distance_to_earth: number;

  @Column({ default: new Date() })
  last_update: Date;
}
