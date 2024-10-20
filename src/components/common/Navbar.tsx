'use client';

import { House} from "lucide-react";
import { FaSquareXTwitter, FaLinkedin  } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import ThemeToggle from "../theme/ThemeToggle";

const Navbar = () => {
  return (
    <div className="mt-4 fixed top-0 left-0 right-0 flex justify-center items-center p-4 rounded-2xl bg-black bg-opacity-60 backdrop-blur-md shadow-md z-50 mx-auto max-w-max dark:shadow-dark-md drop-shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="flex items-center space-x-4">
        <House className="text-white text-3xl cursor-pointer" />

        <div className="h-8 border-l border-gray-300"></div>

        <div className="flex space-x-4">
          <FaSquareXTwitter className="text-white text-3xl cursor-pointer" />
          <FaLinkedin className="text-white text-3xl cursor-pointer" />
          <FaGithubSquare className="text-white text-3xl cursor-pointer" />
        </div>

        <div className="h-8 border-l border-gray-300"></div>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
