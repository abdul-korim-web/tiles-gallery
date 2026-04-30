"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { signOut } from "better-auth/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import userLogo from "@/assets/user.png";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data, isPending } = useSession();
  const user = data?.user;
  const router = useRouter();
  const handelLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className=" mx-auto px-4 py-3 md:px-10 md:py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold italic font-mono animate__animated animate__backInLeft"
        >
          TilesHub
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm px-5 py-2 rounded-full border border-gray-200 shadow-sm bg-white animate__animated animate__backInDown">
          <Link href="/" className="px-4 py-1 rounded-full hover:bg-gray-100 animate__animated animate__backInLeft ">
            Home
          </Link>
          <Link
            href="/tiles"
            className="px-4 py-1 rounded-full hover:bg-gray-100animate__animated animate__backInUp"
          >
            All Tiles
          </Link>
          <Link
            href="/profile"
            className="px-4 py-1 rounded-full hover:bg-gray-100 animate__animated animate__backInRight"
          >
            My Profile
          </Link>
        </div>

        <div className="flex items-center gap-2 animate__animated animate__backInRight">
          {isPending ? (
            <span className="text-xs text-gray-500">Loading...</span>
          ) : user ? (
            <>
              <Image
                src={user?.image || userLogo}
                alt="user"
                width={32}
                height={32}
                className="rounded-full border"
              />
              <span className="hidden md:block text-sm font-medium">
                {user?.name}
              </span>
              <Button
                onClick={() => handelLogout()}
                className="hidden md:flex rounded-full px-4 bg-black text-white text-xs"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden md:inline-block px-4 py-1 rounded-full bg-black text-white text-xl"
              >
                Login
              </Link>
            </>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-3 text-sm border-t">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/tiles" onClick={() => setMenuOpen(false)}>
            All Tiles
          </Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>
            My Profile
          </Link>

          <div className="pt-3 border-t flex flex-col gap-2">
            {user ? (
              <>
                <span className="text-sm font-medium">{user?.name}</span>
                <Button
                  onClick={() => handelLogout()}
                  className="rounded-full bg-black text-white text-sm"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link
                href="/login"
                className="text-center px-4 py-2 rounded-full bg-black text-white text-sm"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
