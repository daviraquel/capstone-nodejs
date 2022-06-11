import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { CelestialBody } from "./celestialBody.entity";

@Entity()
export class Data {
  @PrimaryColumn("uuid")
  readonly id: string;

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
