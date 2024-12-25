import React from "react";
import Image from "next/image";

const Blog = () => {
  const blogs = [
    {
      title: "Getting Started with TypeScript",
      category: "TypeScript",
      description:
        "Learn how TypeScript can enhance your JavaScript projects with type safety and better tooling.",
      image: "/blog1.png",
      link: "/blog/typescript",
    },
    {
      title: "Mastering Next.js",
      category: "Next.js",
      description:
        "Explore the powerful features of Next.js for building high-performance web applications.",
      image: "/blog2.png",
      link: "/blog/nextjs",
    },
    {
      title: "Building with Shadcn",
      category: "Shadcn",
      description:
        "Discover how Shadcn simplifies your component development with accessible and flexible libraries.",
      image: "/blog3.png",
      link: "/blog/shadcn",
    },
  ];

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.map((blog, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-200 dark:border-gray-700 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {blog.category.toUpperCase()}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                      {blog.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{blog.description}</p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href={blog.link}
                        className="text-indigo-500 dark:text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/blog"
              className="bg-indigo-500 dark:bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-indigo-600 dark:hover:bg-indigo-700 transition"
            >
              Explore More Blogs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
