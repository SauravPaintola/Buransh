import getBlogs from "./utils/getblogs";

export default async function sitemap() {
  const response = await getBlogs();
  const blogPosts = response?.map((post) => {
    return {
      url: `https://buranshfoundation.in/api/blog/${post?.slug}`,
      lastModified: post?.createdAt,
    };
  });
  return [
    {
      url: "https://buranshfoundation.in/",
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
}
