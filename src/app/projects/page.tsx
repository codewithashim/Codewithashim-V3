import Project from "@/src/features/Project/Project";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashim Rudra Paul | Software Engineer",
  description:
    "Experienced Software Engineer with 2+ years in MERN stack, TypeScript, Next.js, React Native, AWS, Docker, and more. Sylhet Polytechnic Institute graduate. Let's bring your ideas to life with scalable, efficient web solutions!",
  keywords:
    "Ashim Rudra Paul, Software Engineer, Full Stack Developer, MERN Stack, TypeScript, Next.js, React Native, AWS, Docker, JavaScript, MongoDB, Express.js, Node.js, PostgreSQL, MySQL, Laravel, GraphQL, Prisma, Fastify, Strapi.io, SJ Innovation, elPixala, Sylhet Polytechnic Institute, SPI, Sylhet, Bangladesh",
  authors: [
    { name: "Ashim Rudra Paul", url: "https://codewithashim.netlify.app" },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codewithashim.netlify.app",
    siteName: "Ashim Rudra Paul - Software Engineer",
    title:
      "Ashim Rudra Paul | Software Engineer | Full Stack Developer | Backend Engineer",
    description:
      "Experienced Software Engineer with 2+ years in MERN stack, TypeScript, Next.js, React Native, AWS, Docker, and more. Sylhet Polytechnic Institute graduate. Let's bring your ideas to life with scalable, efficient web solutions!",
    images: [
      {
        url: "/ashim.jpg",
        width: 1200,
        height: 630,
        alt: "Ashim Rudra Paul - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codewithashim",
    creator: "@codewithashim",
    title:
      "Ashim Rudra Paul | Software Engineer | Full Stack Developer | Backend Engineer",
    description:
      "Experienced Software Engineer with 2+ years in MERN stack, TypeScript, Next.js, React Native, AWS, Docker, and more.",
    images: ["/twitter.jpg"],
  },
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_STRING",
  //   yandex: "YOUR_YANDEX_VERIFICATION_STRING",
  //   me: "YOUR_ME  VERIFICATION_STRING",
  //   other: {
  //     "facebook-domain-verification": ["YOUR_FACEBOOK_DOMAIN_VERIFICATION_CODE"],
  //     "google-site-verification": ["YOUR_GOOGLE_SITE_VERIFICATION_CODE"],
  //   },
  // },
  icons: {
    icon: [
      { url: "/ashim.jpg" },
      { url: "/ashim.jpg", type: "image/jpg", sizes: "32x32" },
    ],
    apple: [{ url: "/ashim.jpg", sizes: "180x180", type: "image/jpg" }],
  },
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  alternates: {
    canonical: "https://codewithashim.netlify.app",
  },
};

const ProjectPage = () => {
  return (
    <section className="container mx-auto">
      <Project />
    </section>
  );
};

export default ProjectPage;
