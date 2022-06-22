import * as yup from "yup";

const createDataSchema = yup.object().shape({
  body_id: yup.string().uuid().required(),
  description: yup.string().lowercase().required(),
  mass: yup.number().required(),
  volume: yup.number().required(),
  distance_of_earth: yup.number().required(),
});

const serializedCreateDataSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  description: yup.string().lowercase().required(),
  mass: yup.number().required(),
  volume: yup.number().required(),
  distance_of_earth: yup.number().required(),
  last_update: yup.date().required(),
});

export { createDataSchema, serializedCreateDataSchema };
