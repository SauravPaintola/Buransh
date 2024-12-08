import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mainImg: { type: String, required: true },
  region: { type: String, required: true }, // New field for region (Kumaon/Garhwal)
  topics: { type: [String], required: true }, // New field for selected topics
  author: { type: String, default: "Buransh Foundation" },
  createdAt: { type: Date, default: Date.now },
  slug: { type: String, required: true },
});

const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);

export default BlogPost;
