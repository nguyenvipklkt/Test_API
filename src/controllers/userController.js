import User from "../models/user.js";
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
});

let getProfileController = async (req, res) => {
  const user = await User.findAll({
    where: {
      user_id: req.id,
    },
  });
  return res.json({ user: user });
};

let updateProfileController = async (req, res) => {
  let { name, myDate } = req.body;
  var user = await User.findAll({
    where: {
      user_id: req.id,
    },
  });
  if (user != "") {
    user = await User.update(
      {
        name: name,
        myDate: myDate,
      },
      {
        where: {
          user_id: req.id,
        },
      }
    );
    res.status(200).json({
      message: "Update information of user successful!",
    });
  } else {
    res.status(404).json({
      message: "Account doesn't exist!",
    });
  }
};
let deleteAcount = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        user_id: req.id,
      },
    });
    delete req.headers["authorization"];
    return res.status(200).json({
      message: "Delete Account successfull!",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Delete Account fail!",
    });
  }
};
export default {
  getProfileController,
  updateProfileController,
  deleteAcount,
};
