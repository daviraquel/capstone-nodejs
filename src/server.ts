import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
    app.listen(3000);
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
