import BlogPost from "../../../models/BlogPost";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectDb from "../../../lib/db";
import { storage } from "../../../lib/firebase/storage";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import slugify from "slugify";
export async function GET() {
  try {
    await connectDb();
    const allPosts = await BlogPost.find();
    return NextResponse.json(
      { data: allPosts, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}

const uploadImage = async (image) => {
  if (!image) return null;

  const storageRef = ref(storage, `images/${image.name}`);
  const uploadTask = uploadBytesResumable(storageRef, image);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        reject(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};

const checkAccess = (cookieStore) => {
  const token = cookieStore.get("access")?.value;
  if (!token) return false;

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    return decoded && decoded.id;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};

export async function POST(request) {
  const cookieStore = cookies();
  if (!checkAccess(cookieStore)) {
    return NextResponse.json(
      { error: "Unauthorized", success: false },
      { status: 401 }
    );
  }

  const req = await request.formData();
  const title = req.get("title");
  const description = req.get("description");
  const topics = req.get("topics") ? JSON.parse(req.get("topics")) : [];
  const image = req.get("image");

  // New fields for region and category
  const region = req.get("region");
  const category = req.get("category");

  if (!image) {
    return NextResponse.json(
      { error: "Image is required", success: false },
      { status: 400 }
    );
  }

  try {
    await connectDb();

    // Check if a blog post with the same title already exists
    const existingPost = await BlogPost.findOne({ title });
    if (existingPost) {
      return NextResponse.json(
        { error: "Blog with the same title already exists", success: false },
        { status: 400 }
      );
    }

    const imageUrl = await uploadImage(image);

    const slug = slugify(title, { lower: true, strict: true });
    let blogPost = new BlogPost({
      title,
      description,
      topics,
      mainImg: imageUrl,
      slug,
      region, // Added region
      category, // Added category
    });
    const result = await blogPost.save();

    return NextResponse.json({ data: result, success: true }, { status: 201 });
  } catch (error) {
    console.error("Error saving the file:", error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const cookieStore = cookies();
  if (!checkAccess(cookieStore)) {
    return NextResponse.json(
      { error: "Unauthorized", success: false },
      { status: 401 }
    );
  }

  const { id } = await request.json(); // Get the blog post ID from the request body

  if (!id) {
    return NextResponse.json(
      { error: "Blog post ID is required", success: false },
      { status: 400 }
    );
  }

  try {
    await connectDb();

    // Find and delete the blog post
    const deletedPost = await BlogPost.findByIdAndDelete(id);

    if (!deletedPost) {
      return NextResponse.json(
        { error: "Blog post not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog post deleted successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting the blog post:", error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
