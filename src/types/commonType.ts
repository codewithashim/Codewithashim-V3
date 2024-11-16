export interface Experience {
    id: number
    img: string
    role: string
    company: string
    location: string
    date: string
    desc: string
    skills: string[]
    responsibilities: string[]
}

export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription?: Array<{
        _type: 'block';
        children: Array<{
            _type: 'span';
            text: string;
        }>;
    }>;
    mainImage?: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    gallery?: Array<{
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    }>;
    categories?: Array<{
        _type: 'reference';
        _ref: string;
    }>;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    startDate: string;
    endDate?: string;
    isOngoing: boolean;
    client?: string;
    testimonial?: string;
    role?: string;
    teamSize?: number;
    challenges?: string[];
    solutions?: string[];
    outcomes?: string[];
    featured: boolean;
    order?: number;
}