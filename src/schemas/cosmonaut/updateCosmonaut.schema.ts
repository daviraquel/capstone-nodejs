import * as yup from "yup";

export const updateCosmonautSchema = yup.object().shape({
  user_name: yup.string().lowercase().optional(),
  email: yup.string().email().lowercase().optional(),
  password: yup.string().optional(),
});
