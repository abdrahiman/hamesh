import mongoose from "mongoose";
let url = process.env.DATABASE_URL;
const dbConnect = async () => {
  try {
    const cn = await mongoose.connect(url || "");
    return cn;
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
