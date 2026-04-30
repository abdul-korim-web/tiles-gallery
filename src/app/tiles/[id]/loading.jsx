import React from 'react';

const Loading = () => {
    return (
         <div className="max-w-[1200px] mx-auto px-4 py-10 animate-pulse">

      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full h-[350px] md:h-[450px] bg-gray-200 rounded-2xl"></div>
        <div className="space-y-4">

          <div className="h-6 bg-gray-200 rounded w-2/3"></div>
          <div className="h-5 bg-gray-200 rounded w-1/4"></div>

          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>

          <div className="flex gap-2 pt-4">
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          </div>

          <div className="h-10 w-32 bg-gray-300 rounded-full mt-4"></div>

        </div>
      </div>
    </div>
    );
}

export default Loading;
