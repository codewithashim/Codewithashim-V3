/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BlogPostType {
    id: string;
    title: string;
    sub_title: string;
    publish_date: string;
    cover_image: any;
    tags?: string[];
}