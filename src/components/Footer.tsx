import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 title-font font-medium text-gray-900 dark:text-white mb-4 sm:mb-0"
        >
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <span className="text-xl">HamzaBlog</span>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
          © 2024 HamzaBlog
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/hamza-sheikh-351766298/"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/Hamza-Sheikh-02"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
