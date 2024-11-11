// src/features/Blog/@components/BlogCard.tsx

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { ArrowRight, Clock } from "lucide-react"
import { BlogPost } from '@/src/schema/BlogSchema'

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.div
            variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
            }}
        >
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border-purple-200">
                <CardHeader className="p-0">
                    <div className="relative w-full h-48">
                        <Image
                            alt={`${post.title} thumbnail`}
                            src={post.coverImage}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform hover:scale-105"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-purple-600">
                        <time className="flex items-center gap-1" dateTime={post.dateAdded}>
                            <Clock className="w-4 h-4" />
                            {new Date(post.dateAdded).toLocaleDateString()}
                        </time>
                    </div>
                    <CardTitle className="mt-4 text-xl text-purple-800">{post.title}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-2 text-gray-600">
                        {post.brief}
                    </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    <Link
                        className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline"
                        href={`https://codewithashim.hashnode.dev/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    )
}