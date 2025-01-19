"use client";
import { useEffect } from "react";
import BlogDetails from "@/src/features/Blog/BlogDetails/BlogDetails";
import { BlogPostType } from "@/src/types/blogType";
import BlogSkeleton from "@/src/features/Blog/@components/BlogSkeleton";
import { envConfig } from "@/src/config/envConfig";
import useNotion from "@/src/hooks/useNotion";

export default function BlogPage({ params }: { params: { blogid: string } }) {
  const blogId = params?.blogid;
  const { blogData, fetchBlogTable } = useNotion();

  useEffect(() => {
    fetchBlogTable(envConfig.NOTION_BLOG_TABLE_ID!);
  }, []);

  if (blogData.loading) {
    return <BlogSkeleton />;
  }

  if (!blogData.data) {
    return <div className="text-center py-20">Failed to load blog data.</div>;
  }

  const publishedBlog = blogData.data.filter((p: BlogPostType) => p.publish_date);
  const currentPost = publishedBlog.find((p: BlogPostType) => p.id === blogId);

  if (!currentPost) {
    return <div className="text-center py-20">Blog post not found.</div>;
  }

  const postIndex = publishedBlog.findIndex((p: BlogPostType) => p.id === blogId);
  const morePosts = publishedBlog
    .slice(0, postIndex)
    .concat(publishedBlog.slice(postIndex + 1, postIndex + 4));

  return (
    <div className="min-h-screen">
      <BlogDetails
        blogId={blogId}
        post={{
          id: currentPost.id,
          title: currentPost.title,
          date: currentPost.publish_date,
          slug: currentPost.sub_title,
          coverImage: currentPost.cover_image,
          tags: currentPost.tags || [],
        }}
        morePosts={morePosts}
      />
    </div>
  );
}