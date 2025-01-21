import axios from "axios";

export default async function getBlogs() {
  try {
    const data = await axios.get("https://www.buranshfoundation.in/api/blog"); // Use the correct URL and port
    console.log(data);
    return data.data.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}
