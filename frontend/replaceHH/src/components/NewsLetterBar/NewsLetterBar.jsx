import React from "react";
import { Mail } from "lucide-react"; // You can replace this with an SVG if needed

const NewsletterBar = () => {
  return (
    <section className="bg-white py-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Side: Icon + Text */}
        <div className="flex items-center gap-4 text-left">
          <div className="bg-emerald-700 text-white p-4 rounded-full shadow-md">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-600 text-sm">
              We'll keep you updated with the best new jobs.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="flex w-full max-w-md lg:max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 border border-gray-200 rounded-l-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="bg-emerald-700 text-white font-semibold px-6 py-3 rounded-r-full hover:bg-emerald-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBar;
