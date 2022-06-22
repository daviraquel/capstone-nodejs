import { Router } from "express";
import categoryController from "../controllers/category/category.controller";
import { schemaValidation } from "../middlewares";
import { CheckCategoryExists, IdVerify } from "../middlewares/category";
import { validateToken } from "../middlewares/validateToken.middleware";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/category";

const routes = Router();

export const categoryRoutes = () => {
  routes.post(
    "/",
    validateToken,
    schemaValidation(createCategorySchema),
    CheckCategoryExists,
    categoryController.CategoryCreate
  );

  routes.get("/", validateToken, categoryController.ListAllCategories);

  routes.get(
    "/:id",
    validateToken,
    IdVerify,
    categoryController.ListCategoryById
  );

  routes.patch(
    "/:id",
    validateToken,
    schemaValidation(updateCategorySchema),
    IdVerify,
    categoryController.UpdateCategory
  );

  routes.delete(
    "/:id",
    validateToken,
    IdVerify,
    categoryController.DeleteCategory
  );

  return routes;
};
