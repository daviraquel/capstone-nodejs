import {
  Entity,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Data } from "./data.entity";
import { Cosmonaut } from "./cosmonaut.entity";
import { Category } from "./category.entity";
import { Galaxy } from "./galaxy.entity";

@Entity()
export class CelestialBody {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @Column()
  name: string;

  @Column({ default: new Date() })
  created_on: Date;

  @OneToOne((type) => Data)
  @JoinColumn()
  data: Data;

  @ManyToOne((type) => Cosmonaut, (cosmonaut) => cosmonaut.created_bodies, {
    eager: true,
  })
  creator: Cosmonaut;

  @ManyToOne((type) => Category, (category) => category.celestial_bodies, {
    eager: true,
  })
  category: Category;

  @ManyToOne((type) => Galaxy, (galaxy) => galaxy.celestial_bodies, {
    eager: true,
  })
  galaxy: Galaxy;
}
