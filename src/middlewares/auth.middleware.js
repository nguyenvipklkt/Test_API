import express from "express";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

const middleware = express.Router();
dotenv.config();

middleware.use((req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decodedToken = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    if (decodedToken === null) {
      // Token hết hạn
      console.log("Token expired");
    } else {
      // Token hợp lệ
      console.log("Token valid");
    }
    console.log(decodedToken);
    req.id = decodedToken.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
});

export default middleware;
