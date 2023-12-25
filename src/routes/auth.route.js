import authController from "../controllers/authController.js";
import express from "express";

let router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Returns a JWT token upon successful login
 *     parameters:
 *       - in: body
 *         name: credentials
 *         description: User credentials
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               description: Email
 *             password:
 *               type: string
 *               description: Password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             example:
 *               token: 'your.jwt.token'
 */

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: User register
 *     description: Returns a JWT token upon successful register
 *     parameters:
 *       - in: body
 *         name: credentials
 *         description: User credentials
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Name
 *             email:
 *               type: string
 *               description: Email
 *             password:
 *               type: string
 *               description: Password
 *     responses:
 *       200:
 *         description: Successful register
 *         content:
 *           application/json:
 *             example:
 *               token: 'your.jwt.token'
 */

const initAuthRoute = (app) => {
  router.post("/login", authController.login);
  router.post("/register", authController.register);

  return app.use("/api/v1/", router);
};

export default initAuthRoute;
