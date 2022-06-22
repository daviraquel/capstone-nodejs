import * as yup from "yup";

export const createCosmonautSchema = yup.object().shape({
  user_name: yup.string().lowercase().required(),
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
});
