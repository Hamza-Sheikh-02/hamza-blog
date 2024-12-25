import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white"
        >
          <span className="ml-3 text-xl">HamzaBlog</span>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 dark:sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
          © 2024 HamzaBlog
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/Hamza-Sheikh-02"
            className="ml-4 text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FaGithub size={24} />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
