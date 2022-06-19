import * as yup from "yup";

const seralizedCategorySchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  description: yup.string().optional(),
});

export { seralizedCategorySchema };
