import mongoose from "mongoose";
let { Schema, models, model } = mongoose;
const ChatSchema = new Schema(
  {
    content: String,
    userId: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    _id: true, // Enable auto-generated _id field
    timestamps: true, // Enable createdAt and updatedAt fields
  }
);
// delete models.Chat;

let Chat = models.Chat;
if (!Chat) {
  Chat = model("Chat", ChatSchema);
}
export default Chat;
