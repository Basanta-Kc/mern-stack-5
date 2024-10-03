const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/55-shop");
    console.log("Database Connected.");
  } catch (error) {
    console.log("Database Connection Error:", error);
  }
};

module.exports = connectDB;
