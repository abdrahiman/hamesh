import mongoose from "mongoose";
let url = process.env.DATABASE_URL;
const dbConnect = async () => {
  try {
    let con = await mongoose.connect(url || "");
    return con;
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
