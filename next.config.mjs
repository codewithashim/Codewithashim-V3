/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.notion.so",
      "notion.so",
      "images.unsplash.com",
      "pbs.twimg.com",
      "picsum.photos",
      "res.cloudinary.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
