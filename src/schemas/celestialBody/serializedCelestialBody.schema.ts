import * as yup from "yup";

export const serializedCelestialBodySchema = yup.object().shape({
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
