"use client";
import GoogleSingUp from "@/Components/GoogleSingUp";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handelRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const registerFormData = new FormData(e.target);

    const userData = Object.fromEntries(registerFormData.entries());
    const { data, error } = await authClient.signUp.email({
      ...userData,
      callbackURL: "/login",
    });
    if (data) {
      toast.success("Thank you for signup");
      router.push("/login");
    } else {
      toast.error(error?.message);
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 ">
      <div className="w-full max-w-md bg-white border rounded-2xl p-6 shadow-sm animate__animated animate__backInUp">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={handelRegister} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <input
            name="image"
            type="text"
            placeholder="Photo URL"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
          />

          <Button
            type="submit"
            className={`w-full cursor-pointer  bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition ${loading ? "cursor-not-allowed bg-gray-500 " : ""}`}
          >
            {loading ? "Register..." : "Register"}
          </Button>
        </form>
        <div className="my-4 text-center text-sm text-gray-400">OR</div>
       <GoogleSingUp/>
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
