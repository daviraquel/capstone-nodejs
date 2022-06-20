import { Router } from "express";
import categoryController from "../controllers/category/category.controller";
import { schemaValidation } from "../middlewares";
import { CheckCategoryExists, IdVerify } from "../middlewares/category";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/category";

const routes = Router();

export const categoryRoutes = () => {
  routes.post(
    "/",
    schemaValidation(createCategorySchema),
    CheckCategoryExists,
    categoryController.CategoryCreate
  );

  routes.get("/", categoryController.ListAllCategories);

  routes.get("/:id", IdVerify, categoryController.ListCategoryById);

  routes.patch(
    "/:id",
    schemaValidation(updateCategorySchema),
    IdVerify,
    categoryController.UpdateCategory
  );

  routes.delete("/:id", IdVerify, categoryController.DeleteCategory);

  return routes;
};
