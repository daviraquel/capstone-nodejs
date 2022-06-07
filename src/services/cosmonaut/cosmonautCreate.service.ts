import bcrypt from "bcrypt";

import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Cosmonaut } from "../../entities/cosmonaut.entity";

import { ICosmonautCreate } from "../../interfaces/cosmonaut";

const userCreateService = async ({
  user_name,
  email,
  password,
}: ICosmonautCreate) => {
  const cosmonautRepository = AppDataSource.getRepository(Cosmonaut);

  const cosmonauts = await cosmonautRepository.find();

  const emailAlreadyExists = cosmonauts.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(409, "email already exists");
  }

  const newCosmonaut = new Cosmonaut();
  newCosmonaut.user_name = user_name;
  newCosmonaut.email = email;
  newCosmonaut.password = bcrypt.hashSync(password, 10);
  //newCosmonaut.studied_bodies = [];

  cosmonautRepository.create(newCosmonaut);
  await cosmonautRepository.save(newCosmonaut);

  return { status: 201, message: newCosmonaut };
};

export default userCreateService;
