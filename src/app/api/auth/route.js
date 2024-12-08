import Admin from "../../../models/Admin"; // Adjust path based on your project structure
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // Import jsonwebtoken package
import dbConnect from "../../../lib/db"; // Import dbConnect function

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    await dbConnect(); // Connect to MongoDB

    // Find admin by email
    const admin = await Admin.findOne({ email });

    // If admin not found
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Invalid Credentials" },
        { status: 401 }
      );
    }

    // Compare hashed password with stored password
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (passwordMatch) {
      // Generate JWT token
      const token = jwt.sign({ id: admin._id }, process.env.JWT_KEY, {
        expiresIn: "1h",
      });

      const cookieOptions = {
        httpOnly: true, // Cookie cannot be accessed via client-side JavaScript
        secure: process.env.NODE_ENV === "production", // Enable in production for HTTPS
        sameSite: "strict", // Protect against CSRF attacks
        maxAge: 3600, // Cookie expires in 1 hour (in seconds)
        path: "/", // Cookie is accessible from all paths of the site
      };

      let response = NextResponse.json(
        {
          success: true,
          message: "Login successful",
          token: token,
        },
        { status: 200 }
      );
      response.cookies.set({
        name: "access",
        value: token,
        maxAge: 3600,
        httpOnly: true, // Cookie cannot be accessed via client-side JavaScript
      });
      return response;
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid Credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// import Admin from "@/models/Admin"; // Adjust path based on your project structure
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import dbConnect from "@/lib/db"; // Import dbConnect function

// export async function POST(request) {
//   const { email, password } = await request.json(); // Get email and password from request

//   try {
//     await dbConnect(); // Connect to MongoDB

//     // Check if the email is already registered
//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       return NextResponse.json(
//         { success: false, message: "Admin with this email already exists" },
//         { status: 400 }
//       );
//     }

//     // Hash the password before saving
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new admin
//     const newAdmin = new Admin({
//       email,
//       password: hashedPassword, // Save the hashed password
//     });

//     // Save the admin to the database
//     await newAdmin.save();

//     return NextResponse.json(
//       { success: true, message: "Admin created successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error creating admin:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
