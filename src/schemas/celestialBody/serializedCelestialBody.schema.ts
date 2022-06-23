import * as yup from "yup";

export const serializedCelestialBodySchema = yup.object().shape({
  data: yup.object().shape({
    description: yup.string(),
    mass: yup.number(),
    volume: yup.number(),
    distance_of_earth: yup.number(),
    last_update: yup.date(),
  }),

  category: yup.object().shape({
    name: yup.string(),
  }),
  galaxy: yup.object().shape({
    name: yup.string().required(),
  }),
  creator: yup.object().shape({
    user_name: yup.string(),
  }),
  created_on: yup.date().required(),
  name: yup.string().required(),
  id: yup.string().uuid().required(),
});
