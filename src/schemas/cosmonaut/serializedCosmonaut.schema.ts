import * as yup from "yup";

export const serializedCosmonautSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  user_name: yup.string().required(),
  email: yup.string().email().required(),
});
