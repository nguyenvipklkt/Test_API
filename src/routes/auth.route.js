import authController from "../controllers/authController.js";
import express from "express";

let router = express.Router();

const initAuthRoute = (app) => {
  router.post("/login", authController.login);
  router.post("/register", authController.register);

  return app.use("/api/v1/", router);
};

export default initAuthRoute;
