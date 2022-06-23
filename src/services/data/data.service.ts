import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { Data } from "../../entities";
import dataRepository from "../../repositories/data.repository";
import { serializedCreateDataSchema } from "../../schemas/data";

class DataService {
  createData = async ({ validData }: Request): Promise<AssertsShape<any>> => {
    console.log(validData);
    const data: Data = await dataRepository.save({
      ...(validData as Data),
    });

    return await serializedCreateDataSchema.validate(data, {
      stripUnknown: true,
    });
  };

  getData = async () => {
    const listData = await dataRepository.getAll();

    const serializedData = [];

    for (let i = 0; i < listData.length; i++) {
      serializedData.push(
        await serializedCreateDataSchema.validate(listData[i], {
          stripUnknown: true,
        })
      );
    }

    return {
      status: 200,
      message: serializedData,
    };
  };

  getByIdData = async ({ data }: Request) => {
    const { id } = data;
    const galaxyUpdate = await dataRepository.retrieve({ id });

    return await serializedCreateDataSchema.validate(galaxyUpdate, {
      stripUnknown: true,
    });
  };

  updateData = async ({
    data,
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    await dataRepository.update(data.id, { ...(validData as Data) });
    const { id } = data;
    const dataUpdate = await dataRepository.retrieve({ id });

    return await serializedCreateDataSchema.validate(dataUpdate, {
      stripUnknown: true,
    });
  };

  deleteData = async ({ data }: Request) => {
    await dataRepository.delete(data.id);
  };
}

export default new DataService();
