import * as yup from "yup";

export const serializedCelestialBodySchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  created_on: yup.date().required(),
  data: yup.object().shape({
    id: yup.string().uuid(),
    description: yup.string(),
    mass: yup.number(),
    volume: yup.number(),
    distance_of_earth: yup.number(),
    last_update: yup.date(),
  }),
  creator: yup.object().shape({
    id: yup.string().uuid().required(),
    user_name: yup.string().required(),
  }),
  category: yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
  }),
  galaxy: yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
  }),
});
