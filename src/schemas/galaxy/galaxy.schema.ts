import * as yup from "yup";

const createGalaxySchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  creator: yup.string().uuid(),
});

const createSerelizedGalaxySchema = yup.object().shape({
  creator: yup.object().shape({
    user_name: yup.string(),
    email: yup.string(),
  }),
  description: yup.string(),
  name: yup.string().required(),
  id: yup.string().uuid().required(),
});

const UpdateGalaxySchema = yup.object().shape({
  name: yup.string().lowercase().optional(),
  creator: yup.string().uuid().optional(),
  description: yup.string().optional(),
});

export { createSerelizedGalaxySchema, createGalaxySchema, UpdateGalaxySchema };
