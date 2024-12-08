import BlogPost from "../../../../models/BlogPost";
import { NextResponse } from "next/server";
import connectDb from "../../../../lib/db";

export async function GET(request) {
  try {
    await connectDb();

    // Extract slug from the request URL
    const url = new URL(request.url);
    const slug = url.pathname.split("/").pop(); // Get the last part of the path

    if (!slug) {
      return NextResponse.json(
        { error: "Slug is missing", success: false },
        { status: 400 }
      );
    }

    const post = await BlogPost.findOne({ slug });
    // console.log(post);

    if (!post) {
      return NextResponse.json(
        { error: "Post not found", success: false },
        { status: 404 }
      );
    }

    // Get 5 random posts to show in the sidebar
    const otherPosts = await BlogPost.aggregate([
      { $match: { _id: { $ne: post._id } } }, // Exclude the current post
      { $sample: { size: 5 } }, // Get 5 random posts
    ]);

    return NextResponse.json({ data: post, otherPosts, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}


