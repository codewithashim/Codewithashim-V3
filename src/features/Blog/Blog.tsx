"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BlogCard } from "./@components/BlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";
import { BlogPostType } from "@/src/types/blogType";
import BlogHero from "./@components/BlogHero";
import BlogSkeleton from "./@components/BlogSkeleton";
import { envConfig } from "@/src/config/envConfig";
import useNotion from "@/src/hooks/useNotion";

const Blog = () => {
  const { blogData, fetchBlogTable } = useNotion();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPostType[]>([]);

  const postsPerPage = 6;

  useEffect(() => {
    fetchBlogTable(envConfig.NOTION_BLOG_TABLE_ID!);
  }, []);

  useEffect(() => {
    if (blogData?.data) {
      if (searchQuery) {
        const filtered = blogData.data.filter(
          (blog: BlogPostType) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.sub_title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBlogs(filtered);
      } else {
        setFilteredBlogs(blogData.data);
      }
    }
  }, [searchQuery, blogData.data]);

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

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

  return (
    <section>
      <BlogHero handleSearch={handleSearch} />
      <motion.section
        className="mx-auto py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container">
          {blogData.loading ? (
            <BlogSkeleton />
          ) : (
            <motion.div
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredBlogs
                .slice(
                  (currentPage - 1) * postsPerPage,
                  currentPage * postsPerPage
                )
                .map((blog: BlogPostType) => (
                  <motion.div key={blog.id} variants={itemVariants}>
                    <BlogCard post={blog} />
                  </motion.div>
                ))}
            </motion.div>
          )}

          {!blogData.loading && filteredBlogs.length > postsPerPage && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center mt-8"
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        handlePageChange(Math.max(1, currentPage - 1))
                      }
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => handlePageChange(index + 1)}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(Math.min(totalPages, currentPage + 1))
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </motion.div>
          )}
        </div>
      </motion.section>
    </section>
  );
};

export default Blog;
