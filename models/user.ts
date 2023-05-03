import mongoose from "mongoose";
let { models, model, Schema } = mongoose;
let userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    description: String,
    avatar: String,
    videos: [String],
    seved: [String],
  },
  {
    timestamps: true,
  }
);
// delete models.user;

let User = models.User || model("User", userSchema);
export default User;
