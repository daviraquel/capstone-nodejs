import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Data } from "./data.entity";
import { Cosmonaut } from "./cosmonaut.entity";
import { Category } from "./category.entity";
import { Galaxy } from "./galaxy.entity";

@Entity()
export class CelestialBody {
  @PrimaryColumn("uuid")
  readonly id: string;
  @Column()
  name: string;
  @Column()
  created_on: Date;

  @OneToOne((type) => Data, {
    eager: true,
  })
  @JoinColumn()
  data: Data;

  @ManyToOne((type) => Cosmonaut, (cosmonaut) => cosmonaut.created_bodies)
  creator: Cosmonaut;

  @ManyToOne((type) => Category, (category) => category.celestial_bodies)
  category: Category;

  @ManyToOne((type) => Galaxy, (galaxy) => galaxy.celestial_bodies)
  galaxy: Galaxy;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.created_on) {
      this.created_on = new Date();
    }
  }
}
