import { Router } from "express";
import categoryController from "../controllers/categories/category.controller";
import { CategoryExistsMiddleware } from "../middlewares";
import IdVerify from "../middlewares/idVerifyCategory.middleware";

const routes = Router();

export const categoryRoutes = () => {
  routes.post("/", CategoryExistsMiddleware, categoryController.CategoryCreate);

  routes.get("/", categoryController.ListAllCategories);

  routes.get("/:id", IdVerify, categoryController.ListCategoryById);

  routes.patch("/:id", IdVerify, categoryController.UpdateCategory);

  routes.delete("/:id", IdVerify, categoryController.DeleteCategory);

  return routes;
};
