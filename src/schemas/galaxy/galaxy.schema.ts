import * as yup from "yup";

const createGalaxySchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  creator: yup.string(),
});
const createSerelizedGalaxySchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  creator: yup.string(),
});

export { createSerelizedGalaxySchema, createGalaxySchema };
