import axios from "axios";

export default async function getblogbyslug(slug) {
  try {
    const data = await axios.get(`https://www.buranshfoundation.in/api/blog/${slug}`); // Use the correct URL and port
    console.log(data.data.data);
    return data.data.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}
