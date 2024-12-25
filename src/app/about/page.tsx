import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              About HamzaBlog
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Welcome to HamzaBlog, a platform where I share insights and
              tutorials on programming, web development, and modern tools. Here,
              you&apos;ll find articles on TypeScript, Next.js, Shadcn, and
              other technologies that power today&apos;s web applications.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="/author.jpeg"
                alt="Author"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              Hi, I&apos;m Hamza Sheikh
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              I&apos;m a web developer with a passion for creating accessible
              and user-friendly applications. I specialize in TypeScript, React,
              and modern web frameworks like Next.js. I write blogs to help
              others learn and grow in the world of web development.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Feel free to reach out if you have any questions or want to
              collaborate!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Hamza-Sheikh-02"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
