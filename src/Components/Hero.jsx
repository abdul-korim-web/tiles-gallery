import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white py-24 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Your Perfect Aesthetic
        </h1>
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          Premium tiles for modern homes and commercial spaces
        </p>
        <Button
         
          className="px-6 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-200 transition"
        >
          Browse Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
