import express from "express";
import connectDB from "./configs/connectDB.js";
import initUserRoute from "./routes/userRoute.js";
import initAuthRoute from "./routes/auth.route.js";
import middleware from "./middlewares/auth.middleware.js";
import YAML from "yaml";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import specs from "./swagger/swagger.js";

const app = express();
app.use(express.json());
dotenv.config();
connectDB.sync();
const port = process.env.PORT || 4000;

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

initAuthRoute(app);
// app.use(middleware);
initUserRoute(app);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
