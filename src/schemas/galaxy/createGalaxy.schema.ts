import * as yup from "yup";

const createGalaxySchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  creator: yup.string(),
});

export { createGalaxySchema };
