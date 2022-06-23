import * as yup from "yup";

const createDataSchema = yup.object().shape({
  body_id: yup.string().uuid().required(),
  description: yup.string().lowercase().required(),
  mass: yup.number().required(),
  volume: yup.number().required(),
  distance_to_earth: yup.number().required(),
});

const serializedCreateDataSchema = yup.object().shape({
  last_update: yup.date().required(),
  distance_to_earth: yup.number().required(),
  volume: yup.number().required(),
  mass: yup.number().required(),
  description: yup.string().lowercase().required(),
  body_id: yup.object().shape({
    category: yup.object().shape({
      name: yup.string(),
      description: yup.string(),
    }),
    galaxy: yup.object().shape({
      name: yup.string(),
      description: yup.string(),
    }),
    creator: yup.object().shape({
      user_name: yup.string(),
      email: yup.string(),
    }),
    created_on: yup.date(),
    name: yup.string(),
    id: yup.string(),
  }),

  id: yup.string().uuid().required(),
});

const UpdateDataSchema = yup.object().shape({
  description: yup.string().lowercase().optional(),
  mass: yup.number().optional(),
  volume: yup.number().optional(),
  distance_of_earth: yup.number().optional(),
  last_update: yup.date().optional(),
});

export { createDataSchema, serializedCreateDataSchema, UpdateDataSchema };
