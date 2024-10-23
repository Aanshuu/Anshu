"use client";

import { House } from "lucide-react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import ThemeToggle from "../theme/ThemeToggle";

const Navbar = () => {
  return (
    <div className="mt-4 fixed top-0 left-0 right-0 flex justify-center items-center p-4 rounded-2xl bg-black bg-opacity-60 backdrop-blur-md shadow-md z-50 mx-auto max-w-max dark:shadow-dark-md drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="flex items-center space-x-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent the default anchor behavior
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <House className="text-white text-3xl cursor-pointer" />
        </a>

        <div className="h-8 border-l border-gray-300"></div>

        <div className="flex space-x-4">
          <a
            href="https://x.com/anshuu_uu_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter className="text-white text-3xl cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/anshu-bhakat-19199b223/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-3xl cursor-pointer" />
          </a>
          <a
            href="https://github.com/Aanshuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="text-white text-3xl cursor-pointer" />
          </a>
        </div>

        <div className="h-8 border-l border-gray-300"></div>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
