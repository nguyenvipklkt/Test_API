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
        where: {},
      }
    );
    res.status(200).json({
      message: "Cập nhật thông tin người dùng thành công",
    });
  } else {
    res.status(404).json({
      message: "Người dùng không tồn tại",
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
    return res.status(200).json({
      message: "Xoá người dùng thành công",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Xoá người dùng thất bại",
    });
  }
};
export default {
  getProfileController,
  updateProfileController,
  deleteAcount,
};
