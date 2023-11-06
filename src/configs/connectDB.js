import Sequelize from "sequelize";

const connectDB = new Sequelize("Test_API", "root", "", {
  host: "localhost",
  // port: 3306,
  dialect: "mysql",
});

connectDB
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default connectDB;
