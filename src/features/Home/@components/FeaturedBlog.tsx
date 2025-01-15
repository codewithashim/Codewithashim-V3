import React, { useEffect, useState } from "react";
import { BlogCard } from "../../Blog/@components/BlogCard";
import { BlogPostType } from "@/src/types/blogType";
import { envConfig } from "@/src/config/envConfig";
import { getBlogTable as fetchBlogTable } from "@/src/hooks/useBlog";
import BlogSkeleton from "../../Blog/@components/BlogSkeleton";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const FeaturedPosts: React.FC = () => {
  const [blogsData, setBlogsData] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogs = await fetchBlogTable(envConfig.NOTION_BLOG_TABLE_ID!);
        setBlogsData(blogs);
      } catch (err) {
        console.error("Error fetching blog table:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Featured Posts
        </h2>

        {loading ? (
          <BlogSkeleton />
        ) : (
          <motion.div
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {blogsData.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;
