import Link from "next/link";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className=" px-5 md:px-10 px-4 py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
         <h2 className="text-2xl font-bold italic font-mono tracking-tight">
          TilesHub
        </h2>
          <p className="text-sm mt-2">
            Quality floor and wall tiles at affordable price. 
            Serving all over Bangladesh.
          </p>
        </div>
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tiles">All Tiles</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-medium mb-3">Contact Us</h3>
        <div className="flex flex-col space-y-3">
            <p className="text-sm flex space-x-3 items-center "><MdCall className="mr-3 text-xl" /> +880 1617465389</p>
          <p className="text-sm flex space-x-3 items-center "><FaLocationDot className="mr-3 text-xl" /> Bogura, Bangladesh</p>
          <p className="text-sm flex space-x-3 items-center "><IoIosMail className="mr-3 text-xl" /> abdulkorimwebdeveloper@gmail.com</p>
        </div>
          <div className="flex gap-4 mt-5">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition duration-300 shadow-md"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://github.com/abdul-korim-web"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-green-500 hover:text-white transition duration-300 shadow-md"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/abdul-korim-webdeveloper"
          target="_blank"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-red-600 hover:text-white transition duration-300 shadow-md"
        >
          <FaLinkedin />
        </a>
      </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} TilesHub. All rights reserved.
      </div>
    </footer>
  );
}