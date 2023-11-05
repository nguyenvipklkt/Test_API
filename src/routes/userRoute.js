import express from "express";
import userController from "../controllers/userController.js";

let router = express.Router();

const initUserRoute = (app) => {
  router.get("/getProfile", userController.getProfileController);
  router.put("/updateProfile", userController.updateProfileController);
  router.delete("/deleteAccount", userController.deleteAcount);

  return app.use("/api/v1/", router);
};

export default initUserRoute;
