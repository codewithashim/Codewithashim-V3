import { useState, useEffect } from 'react';
import axios from 'axios';
import { BlogPost, BlogResponse } from '@/src/schema/BlogSchema';
import { BLOG_BASE_URL } from '../lib/network';

const POSTS_PER_PAGE = 6;

export function useBlog(currentPage: number) {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [totalPosts, setTotalPosts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await axios.post<{ data: BlogResponse }>(BLOG_BASE_URL, {
                    query: `
                        query {
                            user(username: "codewithashim") {
                                publication {
                                    posts(page: ${currentPage}, pageSize: ${POSTS_PER_PAGE}) {
                                        edges {
                                            node {
                                                _id
                                                title
                                                brief
                                                slug
                                                dateAdded
                                                coverImage
                                            }
                                        }
                                        totalDocuments
                                    }
                                }
                            }
                        }
                    `
                });

                const posts = response.data.data.user.publication.posts.edges.map(edge => edge.node);
                setBlogPosts(posts);
                setTotalPosts(response.data.data.user.publication.posts.totalDocuments);
                setError(null);
                
            } catch (err) {
                setError('Error fetching blog posts');
                console.error('Error fetching blog posts:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [currentPage]);

    return { blogPosts, totalPosts, loading, error };
}