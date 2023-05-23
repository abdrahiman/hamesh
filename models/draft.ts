import mongoose from "mongoose";
let { Schema, models, model } = mongoose;
const DraftSchema = new Schema(
  {
    slug: { type: String, unique: true },
    title: String,
    content: String,
    markdown: String,
    isArchived: { type: Boolean, default: true },
    description: { type: String, default: "" },
    coverUrl: String,
    tags: [String],
  },
  {
    _id: true, // Enable auto-generated _id field
    timestamps: true, // Enable createdAt and updatedAt fields
  }
);
// delete models.Draft;

let Draft = models.Draft;
if (!Draft) {
  Draft = model("Draft", DraftSchema);
}
export default Draft;
