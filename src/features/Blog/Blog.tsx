// src/features/Blog/Blog.tsx

'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useBlog } from "@/src/hooks/useBlog"
import { BlogCard } from "./@components/BlogCard"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { ArrowRight, Clock } from "lucide-react"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/src/components/ui/pagination"
import SearchBar from "./@components/SearchBar"
import { BlogPost } from "@/src/schema/BlogSchema"

export default function Blog() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const { blogPosts, totalPosts, loading, error } = useBlog(currentPage);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

    const postsPerPage = 6;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    useEffect(() => {
        if (searchQuery) {
            const filtered = blogPosts.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.brief.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPosts(filtered);
        } else {
            setFilteredPosts(blogPosts);
        }
    }, [searchQuery, blogPosts]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setSearchQuery('');
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const displayPosts = searchQuery ? filteredPosts : blogPosts;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-gradient-to-br from-purple-50 to-white"
        >
            <div className="container px-4 py-10 mx-auto space-y-16 md:py-16 lg:py-24">
                {/* Hero Section with Featured Post */}
                <motion.section variants={itemVariants} className="grid gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl"
                        >
                            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Latest Insights</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="max-w-[600px] text-gray-600 md:text-xl">
                            Dive into a world of knowledge, innovation, and inspiration. Stay ahead with our cutting-edge articles.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <SearchBar onSearch={handleSearch} />
                        </motion.div>
                    </div>

                    {displayPosts.length > 0 && (
                        <motion.div variants={itemVariants}>
                            <Card className="overflow-hidden transition-shadow hover:shadow-lg border-purple-200">
                                <CardHeader className="p-0">
                                    <div className="relative w-full h-64">
                                        <Image
                                            alt="Featured post thumbnail"
                                            src={displayPosts[0].coverImage}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform hover:scale-105"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-purple-600">
                                        <time className="flex items-center gap-1" dateTime={displayPosts[0].dateAdded}>
                                            <Clock className="w-4 h-4" />
                                            {new Date(displayPosts[0].dateAdded).toLocaleDateString()}
                                        </time>
                                    </div>
                                    <CardTitle className="mt-4 text-2xl text-purple-800">{displayPosts[0].title}</CardTitle>
                                    <CardDescription className="mt-2 line-clamp-2 text-gray-600">
                                        {displayPosts[0].brief}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <Link className="inline-flex items-center text-purple-600 hover:text-purple-700 hover:underline" href={`https://codewithashim.hashnode.dev/${displayPosts[0].slug}`} target="_blank" rel="noopener noreferrer">
                                        Read Full Article
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    )}
                </motion.section>

                {/* Blog Posts Grid */}
                <motion.section variants={itemVariants} className="space-y-8">
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold tracking-tight text-center lg:text-4xl text-purple-800"
                    >
                        {searchQuery ? 'Search Results' : 'Latest Articles'}
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {displayPosts.slice(1).map((post) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </motion.div>
                </motion.section>

                {/* Pagination */}
                {!searchQuery && (
                    <motion.div variants={itemVariants} className="flex justify-center">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                        className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''} text-purple-600 hover:text-purple-700`}
                                    />
                                </PaginationItem>
                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    if (
                                        pageNumber === 1 ||
                                        pageNumber === totalPages ||
                                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                    ) {
                                        return (
                                            <PaginationItem key={pageNumber}>
                                                <PaginationLink
                                                    href="#"
                                                    onClick={() => handlePageChange(pageNumber)}
                                                    isActive={currentPage === pageNumber}
                                                    className={`${currentPage === pageNumber ? 'bg-purple-100 text-purple-700' : 'text-purple-600'} hover:bg-purple-50 hover:text-purple-700`}
                                                >
                                                    {pageNumber}
                                                </PaginationLink>
                                            </PaginationItem>
                                        );
                                    } else if (
                                        pageNumber === currentPage - 2 ||
                                        pageNumber === currentPage + 2
                                    ) {
                                        return <PaginationEllipsis key={pageNumber} className="text-purple-600" />;
                                    }
                                    return null;
                                })}
                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                        className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} text-purple-600 hover:text-purple-700`}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}