import * as yup from "yup";

const createCosmonautSchema = yup.object().shape({
  user_name: yup.string().lowercase().required(),
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
});

const serializedCreateCosmonautSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  user_name: yup.string().required(),
  email: yup.string().email().required(),
});

export { createCosmonautSchema, serializedCreateCosmonautSchema };
