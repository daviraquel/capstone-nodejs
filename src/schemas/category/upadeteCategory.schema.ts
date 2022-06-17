import * as yup from "yup";

const updateCategorySchema = yup.object().shape({
  name: yup.string().lowercase().optional(),
  description: yup.string().optional(),
});

export { updateCategorySchema };
