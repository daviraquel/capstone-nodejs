import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";

import { Cosmonaut } from "./cosmonaut.entity";

@Entity()
export class Galaxy {
  @PrimaryColumn("uuid")
  readonly id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  password: string;

  // @ManyToOne((type) => Cosmonaut, (cosmonaut) => cosmonaut.created_galaxies)
  // creator: Cosmonaut;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
