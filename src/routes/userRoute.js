import express from "express";
import userController from "../controllers/userController.js";

let router = express.Router();

/**
 * @swagger
 * /api/v1/getProfile:
 *   get:
 *     summary: Get profile
 *     tags:
 *       - Account
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         description: Get profile successfull
 */

/**
 * @swagger
 * /api/v1/updateProfile:
 *   put:
 *     summary: Update profile
 *     tags:
 *       - Account
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               myDate:
 *                 type: date
 *     responses:
 *       "200":
 *         description: Update profile successfull
 *       "404":
 *         description: Account doesn't exist!
 */

/**
 * @swagger
 * /api/v1/deleteAccount:
 *   delete:
 *     summary: Delete profile
 *     tags:
 *       - Account
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       "200":
 *         description: Delete Account successfull!
 *       "401":
 *         description: Delete Account fail!
 */

const initUserRoute = (app) => {
  router.get("/getProfile", userController.getProfileController);
  router.put("/updateProfile", userController.updateProfileController);
  router.delete("/deleteAccount", userController.deleteAcount);

  return app.use("/api/v1/", router);
};

export default initUserRoute;
