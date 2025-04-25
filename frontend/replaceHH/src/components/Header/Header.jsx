import React from "react";

export default function Header() {
  return (
    <header className="bg-[#fef9f1]">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-10">
          <a
            className="flex items-center text-gray-900 hover:opacity-80 transition-opacity duration-200"
            role="link"
            aria-label="Homepage"
          >
            <span className="text-3xl font-extrabold text-green-700">C</span>
            <span className="ml-1 text-xl italic font-semibold tracking-wide">
              ivi
            </span>
          </a>

          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            {["Home", "Cats", "Jobs", "Companies", "Candidates", "Blogs"].map(
              (item) => (
                <a
                  key={item}
                  className="hover:text-green-700 transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Login and Call to Action */}
        <div className="flex items-center space-x-4">
          <a
            className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors duration-200 cursor-pointer"
            role="link"
          >
            Login
          </a>
          <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-sm">
            Post a Job
          </button>
        </div>
      </div>
    </header>
  );
}
