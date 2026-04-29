"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white md:px-10 md:py-3">
      <div className=" px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold italic font-mono tracking-tight">
          TilesHub
        </Link>
        <div className="hidden md:flex items-center gap-6 text-[18px] border py-1 px-5 rounded-full border-gray-200 shadow">
          <Link href="/" className="hover:text-gray-600 border rounded-full  py-1 px-4 border-gray-200 shadow-2xl ">Home</Link>
          <Link href="/tiles" className="hover:text-gray-600">All Tiles</Link>
          <Link href="/profile" className="hover:text-gray-600">My Profile</Link>
        </div>
        <div className="flex items-center gap-3">
          {!user ? (
        <Button   className="px-5 py-4 bg-black  text-white rounded-sm  text-xl ">
          Login
        </Button >
          ) : (
            <>
              <Link href="/profile" className="text-sm font-medium">
                {user.name}
              </Link>
              <button className="px-3 py-1.5 bg-black text-white rounded-md text-xl">
                Logout
              </button>
            </>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-lg"
          >
           <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/tiles" onClick={() => setMenuOpen(false)}>All Tiles</Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link>
        </div>
      )}
    </nav>
  );
}