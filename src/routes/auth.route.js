import authController from "../controllers/authController.js";
import express from "express";

let router = express.Router();

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Login successfull
 *       "401":
 *         description: Missing param
 *       "500":
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: User register
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Register successfull
 *       "401":
 *         description: Missing param
 *       "500":
 *         description: Internal server error
 */

const initAuthRoute = (app) => {
  router.post("/login", authController.login);
  router.post("/register", authController.register);

  return app.use("/api/v1/", router);
};

export default initAuthRoute;
