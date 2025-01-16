/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { NotionRenderer, BlockMapType } from "react-notion";
import Link from "next/link";
import Image from "next/image";
import { getPageBlocks, getPageViews } from "@/src/hooks/useBlog";
import { toNotionImageUrl } from "@/src/utils/notion";
import { dateFormatter } from "@/src/utils/helper";
import { BlogCard } from "../@components/BlogCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Calendar, Tag, ChevronDown } from "lucide-react";
import BlogSkeleton from "../@components/BlogSkeleton";

interface BlogDetailsProps {
  blogId: string;
  post: {
    title: string;
    date: string;
    slug: string;
    coverImage: any;
    tags: string[];
  };
  morePosts: any[];
}

const BlogDetails = ({ blogId, post, morePosts }: BlogDetailsProps) => {
  const [blocks, setBlocks] = useState<BlockMapType | null>(null);
  const [postViewCount, setPostViewCount] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBlocks = await getPageBlocks(blogId);
        setBlocks(fetchedBlocks);

        const views = await getPageViews(`/${post.slug}`);
        setPostViewCount(views);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchData();
  }, [blogId, post.slug]);

  if (!blocks) {
    return (
      <div className="min-h-screen container my-auto bg-gradient-to-b from-gray-50 to-white">
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div className="">
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={toNotionImageUrl(post.coverImage[0].url)}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-6"
          style={{ opacity, scale }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {post.title}
          </motion.h1>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 text-sm mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="flex items-center bg-white/20 rounded-full px-3 py-1">
              <Calendar className="w-4 h-4 mr-2" />
              {dateFormatter.format(new Date(post.date))}
            </span>
            <span className="flex items-center bg-white/20 rounded-full px-3 py-1">
              <Eye className="w-4 h-4 mr-2" />
              {postViewCount || "..."} Views
            </span>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/20 text-white text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      <div className="mx-auto px-4 py-12">
        <div className="container">
          <article className="prose prose-lg max-w-none">
            <NotionRenderer blockMap={blocks} mapImageUrl={toNotionImageUrl} />
          </article>

          <div className="my-20">
            {morePosts.length !== 0 && (
              <div>
                <hr className="my-6 md:my-8" />

                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Continue Reading
                  </h3>
                  <Link
                    href="/blogs"
                    className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                  >
                    View all →
                  </Link>
                </div>

                <div className="grid grid-1 md:grid-cols-3 gap-8">
                  {morePosts.map((p) => (
                    <BlogCard key={p?.id} post={p} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
