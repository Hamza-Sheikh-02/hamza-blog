// src/app/blogpost/[id]/page.tsx
import { blogData } from "@/data/blogData"; 
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: {
    id: string;
  };
}

const BlogPost = ({ params }: BlogPostProps) => {
  const { id } = params;

  const blog = blogData.find((blog) => blog.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto p-6 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-8">{blog.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Introduction
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2">{blog.intro}</p>

        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mt-4">
          Advantages
        </h3>
        <ul className="list-disc ml-6 dark:text-gray-400">
          {blog.advantages.map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>

        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 mt-4">
          Example Code
        </h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto dark:bg-gray-700 dark:text-gray-100">
          <code>{blog.exampleCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default BlogPost;
