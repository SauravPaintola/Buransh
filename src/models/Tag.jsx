import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  tags: { type: [String], required: true, unique: true },
});

const Tag = mongoose.models.Tag || mongoose.model("Tag", TagSchema);

export default Tag;
