import { Project } from "@/src/types/commonType";

export const projectData : Project[] = [
    {
        "title": "E-commerce Platform",
        "slug": "e-commerce-platform",
        "description": "A full-featured e-commerce platform built with Next.js and React",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Developed a scalable e-commerce solution with features like product catalog, shopping cart, user authentication, and payment integration."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-1234567890abcdef-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-web-application"
            }
        ],
        "technologies": ["Next.js", "React", "Node.js", "MongoDB"],
        "githubLink": "https://github.com/username/e-commerce-platform",
        "liveLink": "https://e-commerce-platform-demo.com",
        "startDate": "2022-01-01",
        "endDate": "2022-06-30",
        "isOngoing": false,
        "client": "TechRetail Inc.",
        "role": "Lead Developer",
        "teamSize": 5,
        "featured": true
    },
    {
        "title": "Task Management App",
        "slug": "task-management-app",
        "description": "A React Native mobile app for efficient task management",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Created a cross-platform mobile application for task management, featuring real-time updates, push notifications, and team collaboration tools."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-abcdef1234567890-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-mobile-application"
            }
        ],
        "technologies": ["React Native", "Firebase", "Redux"],
        "githubLink": "https://github.com/username/task-management-app",
        "liveLink": "https://play.google.com/store/apps/details?id=com.taskmanagementapp",
        "startDate": "2021-09-01",
        "endDate": "2022-03-31",
        "isOngoing": false,
        "client": "ProductivePro LLC",
        "role": "Mobile Developer",
        "teamSize": 3,
        "featured": true
    },
    {
        "title": "Corporate Website with WordPress",
        "slug": "corporate-website-wordpress",
        "description": "A custom WordPress theme for a corporate website",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Designed and developed a custom WordPress theme for a corporate client, featuring a responsive design, custom post types, and integration with various plugins."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-24680abcdef13579-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-cms"
            }
        ],
        "technologies": ["WordPress", "PHP", "JavaScript", "SASS"],
        "githubLink": "https://github.com/username/corporate-wordpress-theme",
        "liveLink": "https://corporate-website-example.com",
        "startDate": "2022-04-01",
        "endDate": "2022-06-30",
        "isOngoing": false,
        "client": "MegaCorp Industries",
        "role": "WordPress Developer",
        "teamSize": 2,
        "featured": false
    },
    {
        "title": "Fitness Tracking App",
        "slug": "fitness-tracking-app",
        "description": "A React Native mobile application for fitness enthusiasts",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Built a feature-rich fitness tracking mobile app with workout plans, progress tracking, and integration with wearable devices."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-13579abcdef24680-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-mobile-application"
            }
        ],
        "technologies": ["React Native", "GraphQL", "Apollo Client"],
        "githubLink": "https://github.com/username/fitness-tracking-app",
        "liveLink": "https://apps.apple.com/us/app/fitness-tracking-app/id1234567890",
        "startDate": "2021-11-01",
        "endDate": "2022-05-31",
        "isOngoing": false,
        "client": "FitTech Solutions",
        "role": "Mobile Developer",
        "teamSize": 3,
        "featured": true
    },
    {
        "title": "Blog Platform with Strapi",
        "slug": "blog-platform-strapi",
        "description": "A headless CMS blog platform using Strapi and Next.js",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Developed a modern blog platform using Strapi as a headless CMS and Next.js for the frontend, featuring a rich text editor, categories, and user authentication."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-abcdef13579-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-cms"
            },
            {
                "_type": "reference",
                "_ref": "category-web-application"
            }
        ],
        "technologies": ["Strapi", "Next.js", "React", "Node.js"],
        "githubLink": "https://github.com/username/strapi-blog-platform",
        "liveLink": "https://strapi-blog-platform-demo.com",
        "startDate": "2022-07-01",
        "isOngoing": true,
        "client": "ContentCreators Co.",
        "role": "Full Stack Developer",
        "teamSize": 4,
        "featured": true
    },
    {
        "title": "Real Estate Listing Platform",
        "slug": "real-estate-listing-platform",
        "description": "A Next.js web application for real estate listings and management",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Developed a comprehensive real estate platform with features like property listings, advanced search, virtual tours, and agent management."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-24680abcdef-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-web-application"
            }
        ],
        "technologies": ["Next.js", "React", "Node.js", "PostgreSQL"],
        "githubLink": "https://github.com/username/real-estate-platform",
        "liveLink": "https://real-estate-platform-demo.com",
        "startDate": "2022-05-01",
        "isOngoing": true,
        "client": "HomeQuest Realty",
        "role": "Lead Developer",
        "teamSize": 6,
        "featured": true
    },
    {
        "title": "E-learning Platform with Sanity CMS",
        "slug": "e-learning-platform-sanity",
        "description": "An online learning platform using Sanity CMS and Next.js",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Built a comprehensive e-learning platform with course management, video lessons, quizzes, and progress tracking, powered by Sanity CMS for content management."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-13579abcdef-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-cms"
            },
            {
                "_type": "reference",
                "_ref": "category-web-application"
            }
        ],
        "technologies": ["Sanity CMS", "Next.js", "React", "Node.js"],
        "githubLink": "https://github.com/username/sanity-elearning-platform",
        "liveLink": "https://sanity-elearning-platform-demo.com",
        "startDate": "2022-03-01",
        "endDate": "2022-09-30",
        "isOngoing": false,
        "client": "EduTech Innovations",
        "role": "Full Stack Developer",
        "teamSize": 5,
        "featured": true
    },
    {
        "title": "Food Delivery App",
        "slug": "food-delivery-app",
        "description": "A React Native mobile application for food ordering and delivery",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Built a user-friendly food delivery app with features like restaurant browsing, order placement, real-time tracking, and payment integration."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-abcdef24680-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-mobile-application"
            }
        ],
        "technologies": ["React Native", "Redux", "Node.js", "MongoDB"],
        "githubLink": "https://github.com/username/food-delivery-app",
        "liveLink": "https://apps.apple.com/us/app/food-delivery-app/id0987654321",
        "startDate": "2021-10-01",
        "endDate": "2022-04-30",
        "isOngoing": false,
        "client": "QuickBite Technologies",
        "role": "Mobile Developer",
        "teamSize": 4,
        "featured": true
    },
    {
        "title": "News Portal with WordPress",
        "slug": "news-portal-wordpress",
        "description": "A custom WordPress theme for a news and magazine website",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Developed a feature-rich WordPress theme for a news portal, including custom post types, advanced categorization, and integration with social media platforms."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-13579abcdef-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-cms"
            }
        ],
        "technologies": ["WordPress", "PHP", "JavaScript", "CSS"],
        "githubLink": "https://github.com/username/news-portal-wordpress",
        "liveLink": "https://news-portal-example.com",
        "startDate": "2022-02-01",
        "endDate": "2022-05-31",
        "isOngoing": false,
        "client": "Global News Network",
        "role": "WordPress Developer",
        "teamSize": 3,
        "featured": false
    },
    {
        "title": "IoT Dashboard",
        "slug": "iot-dashboard",
        "description": "A real-time IoT dashboard built with Next.js and React",
        "longDescription": [
            {
                "_type": "block",
                "children": [
                    {
                        "_type": "span",
                        "text": "Created a responsive and real-time dashboard for IoT devices, featuring data visualization, device management, and alerts system."
                    }
                ]
            }
        ],
        "mainImage": {
            "_type": "image",
            "asset": {
                "_ref": "image-24680abcdef-1000x1000-jpg",
                "_type": "reference"
            }
        },
        "categories": [
            {
                "_type": "reference",
                "_ref": "category-web-application"
            }
        ],
        "technologies": ["Next.js", "React", "Socket.io", "D3.js"],
        "githubLink": "https://github.com/username/iot-dashboard",
        "liveLink": "https://iot-dashboard-demo.com",
        "startDate": "2022-06-01",
        "isOngoing": true,
        "client": "SmartTech Solutions",
        "role": "Frontend Developer",
        "teamSize": 4,
        "featured": true
    }
]