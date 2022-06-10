import {
  Entity,
  Column,
  PrimaryColumn,
  //OneToOne
  //ManyToOne
  //JoinTable
} from "typeorm";
import { v4 as uuid } from "uuid";

//import {Data} from "./bodyData.entity"
//import {Cosmonaut} from "./cosmonaut.entity"

@Entity()
export class Cosmonaut {
  @PrimaryColumn("uuid")
  readonly id: string;
  @Column()
  name: string;
  @Column()
  created_on: Date;

  // @OneToOne((type) => Data, {
  //     eager: true,
  //   })
  // @JoinColumn()
  // data: Data;

  //   @ManyToOne((type) => Cosmonaut, (Cosmonaut) => Cosmonaut.createdBodies)
  //   creator: Cosmonaut;

  //   @ManyToOne((type) => Category, (Category) => Category.celestialBodies)
  //   category: Category;

  //   @ManyToOne((type) => Galaxy, (Galaxy) => Galaxy.celestialBodies)
  //   galaxy: Galaxy;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.created_on) {
      this.created_on = new Date();
    }
  }
}
