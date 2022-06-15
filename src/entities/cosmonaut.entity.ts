import { compare } from "bcrypt";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { CelestialBody } from "./celestialBody.entity";
import { Galaxy } from "./galaxy.entity";

@Entity()
export class Cosmonaut {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;
  @Column({ unique: true })
  user_name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;

  @ManyToMany((type) => CelestialBody)
  @JoinTable()
  studied_bodies: CelestialBody[];

  @OneToMany((type) => CelestialBody, (celestialBody) => celestialBody.creator)
  created_bodies: CelestialBody[];

  @OneToMany((type) => Galaxy, (galaxy) => galaxy.creator)
  created_galaxies: Galaxy[];

  comparePassword = async (passwordToCompare: string): Promise<boolean> => {
    return await compare(passwordToCompare, this.password);
  };
}
