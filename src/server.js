import express from "express";
import connectDB from "./configs/connectDB.js";
import initUserRoute from "./routes/userRoute.js";
import initAuthRoute from "./routes/auth.route.js";
import middleware from "./middlewares/auth.middleware.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();
connectDB.sync();
const port = process.env.PORT || 4000;
initAuthRoute(app);
app.use(middleware);
initUserRoute(app);
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
