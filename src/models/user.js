import { Sequelize } from "sequelize";
import connectDB from "../configs/connectDB.js";

const User = connectDB.define("user", {
  user_id: {
    type: Sequelize.INTEGER,

    autoIncrement: true,

    allowNull: false,

    primaryKey: true,
  },

  name: { type: Sequelize.STRING, allowNull: false },

  password: { type: Sequelize.STRING, allowNull: false },

  email: { type: Sequelize.STRING, allowNull: false },

  myDate: { type: Sequelize.DATE, defaultValue: null },

  createdAt: Sequelize.DATE,

  updatedAt: { type: Sequelize.DATE, defaultValue: null },
});

export default User;
