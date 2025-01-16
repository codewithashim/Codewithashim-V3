import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPostType } from "@/src/types/blogType";
import { toNotionImageUrl } from "@/src/utils/notion";

interface BlogCardProps {
  post: BlogPostType;
}

export function BlogCard({ post }: BlogCardProps) {
  const fallbackImageUrl = "/path/to/fallback-image.jpg"; // Replace with your fallback image path

  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 ">
        <CardHeader className="p-0">
          <div className="relative w-full h-72">
            <Link href={`/blog/${post?.id}`} >
              <Image
                alt={`${post?.title} cover image`}
                src={
                  post?.cover_image && post.cover_image.length > 0
                    ? toNotionImageUrl(post.cover_image[0].url)
                    : fallbackImageUrl
                }
                layout="fill"
                objectFit="cover"
                className="object-cover transition-transform hover:scale-105"
              />
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 text-sm ">
            <time
              className="flex items-center gap-1"
              dateTime={post.publish_date}
            >
              <Clock className="w-4 h-4" />
              {new Date(post.publish_date).toLocaleDateString()}
            </time>
          </div>
          <CardTitle className="mt-4 text-xl ">
            {post.title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-2 text-gray-600">
            {post.sub_title}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link
            className="inline-flex items-center text-sm font-medium  hover:text-purple-700 hover:underline"
            href={`/blog/${post?.id}`}
            rel="noopener noreferrer"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
