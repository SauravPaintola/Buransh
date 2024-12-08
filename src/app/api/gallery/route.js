import { NextResponse } from "next/server";
import BlogPost from "../../../models/BlogPost";

export async function GET() {
  try {
    // Fetch blogs with only title and mainImg fields
    const blogs = await BlogPost.find({}).select("title mainImg");

    // Map the blogs to an array of objects with src and caption properties
    const imageLinks = blogs.map((blog) => ({
      src: blog.mainImg,
      caption: blog.title,
    }));

    // Return the JSON response with a 200 status
    return NextResponse.json(imageLinks, { status: 200 });
  } catch (error) {
    // Return an error response with a 500 status
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
