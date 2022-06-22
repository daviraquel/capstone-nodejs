import * as yup from "yup";

export const createCelestialBodySchema = yup.object().shape({
  name: yup.string().lowercase().required(),
  creator: yup.string().uuid().required(),
  category: yup.string().uuid().required(),
  galaxy: yup.string().uuid().required(),
});
