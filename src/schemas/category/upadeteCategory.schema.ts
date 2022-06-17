import * as yup from "yup";

const updateCategorySchema = yup.object().shape({
  name: yup.string().lowercase().optional(),
  description: yup.string().optional(),
});

const seralizedUpdateCategorySchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  description: yup.string().optional(),
});

export { updateCategorySchema, seralizedUpdateCategorySchema };
