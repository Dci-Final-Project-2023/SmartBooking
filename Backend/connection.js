import mongoose from "mongoose";

const connection = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected.");
  } catch (error) {
    console.log(error);
  }
};

export default connection;
