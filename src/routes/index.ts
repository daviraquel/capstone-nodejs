import { Express } from "express";
import { categoryRoutes } from "./category.routes";
import { celestialBodyRoutes } from "./celestialBody.routes";
import { cosmonautRoutes } from "./cosmonaut.routes";
import { galaxyRoutes } from "./galaxy.routes";
import { dataRoutes } from "./data.routes";
//importar outras rotas

export const appRoutes = (app: Express) => {
  app.use("/cosmonaut", cosmonautRoutes());
  app.use("/galaxy", galaxyRoutes());
  app.use("/category", categoryRoutes());
  app.use("/data", dataRoutes());
  app.use("/celestialBody", celestialBodyRoutes());

  // registrar outras rotas
};
