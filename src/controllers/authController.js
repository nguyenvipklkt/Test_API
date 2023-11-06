import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();
let login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findAll({
      where: {
        email: email,
      },
    });
    if (user != "") {
      const isPasswordValid = bcrypt.compareSync(password, user[0].password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Invalid username or password." });
      }
      const token = jsonwebtoken.sign(
        { id: user[0].user_id },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.json({ user: user, token: token });
    } else {
      return res.status(401).json({ message: "User does not exist!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error login" });
  }
};

let register = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const checkUser = await User.findAll({
      where: {
        email: email,
      },
    });
    if (checkUser != "") {
      return res.status(401).json({ message: "Email already exists!" });
    } else {
      if (!name || !password || !email) {
        return res.status(401).json({ message: "Missing params!" });
      }
      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = {
        name: name,
        password: hashedPassword,
        email: email,
      };

      // Tạo user mới
      const newUser = await User.create(user);
      const token = jsonwebtoken.sign(
        { id: newUser.user_id },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.json({ user: newUser, token: token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error register" });
  }
};

export default {
  login,
  register,
};
