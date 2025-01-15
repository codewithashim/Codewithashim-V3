"use client";

import React, { useEffect, useState } from "react";
import { getBlogTable as fetchBlogTable } from "@/src/hooks/useBlog";
import { config } from "@/src/utils/helper";
import { motion } from "framer-motion";
import { BlogCard } from "./@components/BlogCard";
import SearchBar from "./@components/SearchBar";
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

const Blog = () => {
  const [blogsData, setBlogsData] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPostType[]>([]);

  const postsPerPage = 6;

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogs = await fetchBlogTable(config?.notionBlogTableId);
        setBlogsData(blogs);
        setFilteredBlogs(blogs);
      } catch (err) {
        console.error("Error fetching blog table:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = blogsData.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.sub_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogsData);
    }
  }, [searchQuery, blogsData]);

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
      <BlogHero />
      <motion.section
        className="container mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="my-12">
          <SearchBar onSearch={handleSearch} />
        </motion.div>

        {loading ? (
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
              .map((blog) => (
                <motion.div key={blog.id} variants={itemVariants}>
                  <BlogCard post={blog} />
                </motion.div>
              ))}
          </motion.div>
        )}

        {!loading && filteredBlogs.length > postsPerPage && (
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
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
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
      </motion.section>
    </section>
  );
};

export default Blog;
