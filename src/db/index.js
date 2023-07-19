const mongoose = require("mongoose");

module.exports = function () {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/first")
    .then(() => console.log("Database connected successfully !"))
    .catch((err) => console.log("Error : ", err));
};
