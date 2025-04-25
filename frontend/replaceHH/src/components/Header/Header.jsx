import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo and Nav Links */}
        <div className="flex items-center space-x-8">
          <a className="flex items-center text-gray-900">
            <span className="text-3xl font-bold text-green-700">C</span>
            <span className="ml-1 text-xl italic font-semibold">ivi</span>
          </a>

          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <a className="hover:text-black cursor-pointer">Home</a>
            <a className="hover:text-black cursor-pointer">Cats</a>
            <a className="hover:text-black cursor-pointer">Jobs</a>
            <a className="hover:text-black cursor-pointer">Companies</a>
            <a className="hover:text-black cursor-pointer">Candidates</a>
            <a className="hover:text-black cursor-pointer">Blogs</a>
          </nav>
        </div>

        {/* Login and CTA */}
        <div className="flex items-center space-x-4">
          <a className="text-gray-600 hover:text-black text-sm font-medium cursor-pointer">
            Login
          </a>
          <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200">
            Post a job
          </button>
        </div>
      </div>
    </header>
  );
}
