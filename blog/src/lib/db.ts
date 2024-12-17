import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose.connect("mongodb://localhost:27017/mern-5-blog");
};

export default connectMongo;
