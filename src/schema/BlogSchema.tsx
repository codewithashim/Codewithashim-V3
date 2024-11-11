export interface BlogPost {
    _id: string;
    title: string;
    brief: string;
    dateAdded: string;
    slug: string;
    coverImage: string;
}

export interface BlogResponse {
    user: {
        publication: {
            posts: {
                edges: Array<{ node: BlogPost }>;
                totalDocuments: number;
            };
        };
    };
}