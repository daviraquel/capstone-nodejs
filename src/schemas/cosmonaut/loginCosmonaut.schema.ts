import * as yup from "yup";

export const loginCosmonautSchema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
});
