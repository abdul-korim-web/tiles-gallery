import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
      
      <h1 className="text-6xl font-bold text-gray-800">404</h1>

      <h2 className="text-xl font-semibold mt-4 text-gray-700">
        Page Not Found
      </h2>

      <p className="text-sm text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
      <p className="text-xs text-gray-400 mt-4">
        TilesHub • Build your dream space
      </p>
    </div>
    );
}

export default NotFound;
