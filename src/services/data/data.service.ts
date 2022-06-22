import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { Data } from "../../entities";
import dataRepository from "../../repositories/data.repository";
import { serializedCreateDataSchema } from "../../schemas/data";

class DataService {
  createData = async ({ validData }: Request): Promise<AssertsShape<any>> => {
    const data: Data = await dataRepository.save({
      ...(validData as Data),
    });

    return await serializedCreateDataSchema.validate(data, {
      stripUnknown: true,
    });
  };

  getData = async () => {
    const listData = await dataRepository.getAll();

    return {
      status: 200,
      message: listData,
    };
  };

  deleteData = async ({ validData }: Request) => {
    await dataRepository.delete(validData.id);
  };
}

export default new DataService();
