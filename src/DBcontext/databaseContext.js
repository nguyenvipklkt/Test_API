import User from "../models/user";

const DBcontext = () => {
  User.sync();
};

export default DBcontext;
