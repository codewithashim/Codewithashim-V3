import React, { useEffect } from "react";
import { BlogCard } from "../../Blog/@components/BlogCard";
import { BlogPostType } from "@/src/types/blogType";
import BlogSkeleton from "../../Blog/@components/BlogSkeleton";
import { motion } from "framer-motion";
import useNotion from "@/src/hooks/useNotion";
import { envConfig } from "@/src/config/envConfig";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const FeaturedPosts: React.FC = () => {
  const { blogData, fetchBlogTable } = useNotion();

  useEffect(() => {
    fetchBlogTable(envConfig.NOTION_BLOG_TABLE_ID!);
  }, []);

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Featured Posts
        </h2>

        {blogData.loading ? (
          <BlogSkeleton />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {blogData.data?.slice(0, 3).map((blog: BlogPostType) => (
              <motion.div key={blog.id} variants={itemVariants}>
                <BlogCard post={blog} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;
