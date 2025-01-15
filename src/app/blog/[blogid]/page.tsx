"use client";

import { useEffect, useState } from "react";
import BlogDetails from "@/src/features/Blog/BlogDetails/BlogDetails";
import { getBlogTable } from "@/src/hooks/useBlog";
import { BlogPostType } from "@/src/types/blogType";
import { config } from "@/src/utils/helper";
import BlogSkeleton from "@/src/features/Blog/@components/BlogSkeleton";

export default function BlogPage({ params }: { params: { blogid: string } }) {
  const blogId = params?.blogid;
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [morePosts, setMorePosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const table = await getBlogTable(config.notionBlogTableId);
        const publishedBlog = table.filter((p: BlogPostType) => p.publish_date);

        const currentPost = publishedBlog.find(
          (p: BlogPostType) => p.id === blogId
        );
        if (currentPost) {
          setPost(currentPost);

          const postIndex = publishedBlog.findIndex(
            (p: BlogPostType) => p.id === blogId
          );
          const morePostsData = [...publishedBlog, ...publishedBlog].slice(
            postIndex + 1,
            postIndex + 3
          );
          setMorePosts(morePostsData);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  if (isLoading) {
    return <BlogSkeleton />;
  }

  if (!post) {
    return <div className="text-center py-20">Blog post not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <BlogDetails
        blogId={blogId}
        post={{
          title: post.title,
          date: post.publish_date,
          slug: post.sub_title,
          coverImage: post.cover_image,
          tags: post.tags || [],
        }}
        morePosts={morePosts}
      />
    </div>
  );
}
