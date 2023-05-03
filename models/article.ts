import mongoose from "mongoose";
let { Schema, models, model } = mongoose;
const articleSchema = new Schema(
  {
    slug: { type: String, unique: true },
    title: String,
    content: String,
    markdown: String,
    isDraft: { type: Boolean, default: true },
    description: { type: String, default: "" },
    coverUrl: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    // authorId: String,
    // author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    _id: true, // Enable auto-generated _id field
    timestamps: true, // Enable createdAt and updatedAt fields
  }
);

let Article = models.Article;
if (!Article) {
  Article = model("Article", articleSchema);
}
export default Article;
