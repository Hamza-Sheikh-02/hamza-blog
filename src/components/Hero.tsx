import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-black dark:text-white body-font bg-white dark:bg-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
            Welcome to Our Blog
            <br className="hidden lg:inline-block" />
            Discover Ideas & Insights
          </h1>
          <p className="mb-8 leading-relaxed">
            Dive into a world of captivating stories, insightful articles, and
            engaging ideas. Explore topics that spark curiosity and fuel
            creativity. Join us in the journey of learning and inspiration.
          </p>
          <div className="flex justify-center">
            <Link href="/about">
              <p className="inline-flex text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-lg">
                About Us
              </p>
            </Link>
            <Link href="/blog">
              <p className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-800 rounded text-lg">
                Explore Blogs
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero.jpg"
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
