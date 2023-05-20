import mongoose from "mongoose";
let { models, model, Schema } = mongoose;
let UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    bio: String,
    avatar: String,
    posts: [String],
    liked: [String],
    saved: [String],
  },
  {
    _id: true, // Enable auto-generated _id field
    timestamps: true, // Enable createdAt and updatedAt fields
  }
);
// delete models.user;

let User = models.User;
if (!User) {
  User = model("User", UserSchema);
}
export default User;
