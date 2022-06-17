import * as yup from "yup";

const createCategorySchema = yup.object().shape({
  name: yup.string().lowercase().required(),
  description: yup.string().lowercase().optional(),
});

const serializedCreateCategorySchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  description: yup.string().optional(),
});

export { createCategorySchema, serializedCreateCategorySchema };
