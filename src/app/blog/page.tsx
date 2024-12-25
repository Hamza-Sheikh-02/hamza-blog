// src/app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/data/blogData";

const BlogList = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Blog - Latest Tech Trends and Insights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <div key={blog.id} className="dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <Image
              src={blog.imageUrl || "/default-image.png"}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold dark:text-white text-gray-900">
              {blog.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mt-2">{blog.intro}</p>
            <Link
              href={`/blogpost/${blog.id}`}
              className="text-blue-500 mt-4 inline-block"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
