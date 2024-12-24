import React from 'react'
// import { Card, CardContent } from "@/src/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
// import { Badge } from "@/src/components/ui/badge"
// import { CalendarIcon, MessageCircle, Share2 } from 'lucide-react'
// import Image from 'next/image'
import { BlogCard } from '../../Blog/@components/BlogCard'

interface Post {
    id: number
    title: string
    excerpt: string
    author: string
    date: string
    image: string
    avatar: string
    comments: number
    featured: boolean
}

// interface BlogCardProps {
//     post: Post
// }

// const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
//     <Card className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-lg transition-shadow hover:shadow-xl">
//         <CardContent className="p-0">
//             <div className="aspect-video relative overflow-hidden">
//                 <Image
//                     alt={post.title}
//                     className="object-cover w-full h-full transition-transform group-hover:scale-105"
//                     src={post.image}
//                     layout="fill"
//                     width={500}
//                     height={300}
//                 />
//                 {post.featured && (
//                     <Badge className="absolute top-4 right-4" variant="secondary">
//                         Featured
//                     </Badge>
//                 )}
//             </div>
//             <div className="p-4 sm:p-6">
//                 <div className="flex items-center gap-4 mb-4">
//                     <Avatar>
//                         <AvatarImage alt={post.author} src={post.avatar} />
//                         <AvatarFallback>{post.author[0]}</AvatarFallback>
//                     </Avatar>
//                     <div>
//                         <h3 className="font-semibold">{post.author}</h3>
//                         <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
//                             <CalendarIcon className="h-4 w-4" />
//                             <span>{post.date}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2">{post.title}</h3>
//                 <p className="text-sm sm:text-base text-muted-foreground mb-4">{post.excerpt}</p>
//                 <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
//                     <div className="flex items-center gap-1">
//                         <MessageCircle className="h-4 w-4" />
//                         <span>{post.comments} comments</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                         <Share2 className="h-4 w-4" />
//                         <span>Share</span>
//                     </div>
//                 </div>
//             </div>
//         </CardContent>
//     </Card>
// )

const FeaturedPosts: React.FC = () => {

    
    const dummyPosts: Post[] = [
        {
            id: 1,
            title: "Building Beautiful Landing Pages",
            excerpt: "Learn how companies are creating stunning landing pages in hours instead of weeks, saving time and resources while maintaining quality.",
            author: "Sarah Wilson",
            date: "November 16, 2024",
            image: "/placeholder.svg?height=300&width=500",
            avatar: "/placeholder.svg?height=40&width=40",
            comments: 24,
            featured: true,
        },
        {
            id: 2,
            title: "The Future of Web Development",
            excerpt: "Explore the latest trends and technologies shaping the future of web development and how they will impact businesses.",
            author: "John Doe",
            date: "November 20, 2024",
            image: "/placeholder.svg?height=300&width=500",
            avatar: "/placeholder.svg?height=40&width=40",
            comments: 18,
            featured: false,
        },
        {
            id: 3,
            title: "Mastering CSS Grid Layout",
            excerpt: "Dive deep into CSS Grid Layout and learn how to create complex, responsive layouts with ease.",
            author: "Emma Smith",
            date: "November 25, 2024",
            image: "/placeholder.svg?height=300&width=500",
            avatar: "/placeholder.svg?height=40&width=40",
            comments: 32,
            featured: false,
        },
    ]

    return (
        <section className="w-full py-12">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">Featured Posts</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {dummyPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedPosts