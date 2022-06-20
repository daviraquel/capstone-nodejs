import * as yup from "yup";

export const serializedCelestialBodyChema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  created_on: yup.date().required(),
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
