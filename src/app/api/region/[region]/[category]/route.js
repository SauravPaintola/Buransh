import BlogPost from "../../../../../models/BlogPost"; // Adjust this to your model or data source
import { NextResponse } from "next/server";
import connectDb from "../../../../../lib/db"; // Ensure your DB connection function is correct

export async function GET(request, { params }) {
  const { region, category } = params;

  try {
    await connectDb();

    if (!region || !category) {
      return NextResponse.json(
        { error: "Region or category is missing", success: false },
        { status: 400 }
      );
    }

    // Query to find posts by region and category
    const posts = await BlogPost.find({
      region: { $regex: new RegExp(`^${region}$`, "i") },
      topics: { $in: [new RegExp(`^${category}$`, "i")] },
    });

    return NextResponse.json({ data: posts, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
