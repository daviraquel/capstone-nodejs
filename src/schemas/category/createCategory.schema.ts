import * as yup from "yup";

const createCategorySchema = yup.object().shape({
  name: yup.string().lowercase().required(),
  description: yup.string().lowercase().optional(),
});

export { createCategorySchema };
