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

const UpdateGalaxySchema = yup.object().shape({
  name: yup.string().lowercase().optional(),
  creator: yup.string().uuid().optional(),
  description: yup.string().optional(),
});

export { createSerelizedGalaxySchema, createGalaxySchema, UpdateGalaxySchema };
