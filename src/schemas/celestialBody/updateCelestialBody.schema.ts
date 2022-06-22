import * as yup from "yup";

export const updateCelestialBodySchema = yup.object().shape({
  name: yup.string().lowercase().optional(),
  creator: yup.string().uuid().optional(),
  category: yup.string().uuid().optional(),
  galaxy: yup.string().uuid().optional(),
});
