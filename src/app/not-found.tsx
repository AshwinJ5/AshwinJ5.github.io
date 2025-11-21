"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className={`w-full flex flex-col bg-black text-gray-200 selection:bg-[#ff0000] selection:text-white  h-dvh`}>
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-4 font-display">
        <div className="flex flex-col items-center gap-6 text-center">
          
          {/* 404 Text */}
          <h1 className="text-8xl font-black tracking-tighter text-white sm:text-9xl lg:text-[150px] leading-none select-none">
            <span className="text-[#ff0000]">4</span>0<span className="text-[#ff0000]">4</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="max-w-md text-base text-gray-400 sm:text-lg md:text-xl">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-8 bg-[#ff0000] text-white text-base font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:bg-white hover:text-[#ff0000] active:scale-95"
              href="/"
            >
              <span className="truncate">Go Back Home</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}