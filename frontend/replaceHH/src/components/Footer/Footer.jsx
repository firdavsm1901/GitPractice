import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-gray-700 text-left">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">JobHunt</h2>
          <p className="text-sm leading-relaxed">
            Your trusted job marketplace for remote, hybrid, and full-time
            roles. Connect with top companies and grow your career.
          </p>
        </div>

        {/* Job Seekers */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Job Seekers
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-emerald-600">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600">
                Remote Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600">
                Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600">
                Career Advice
              </a>
            </li>
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Employers
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-emerald-600">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600">
                Search Resumes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600">
                Employer Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-600">
                Success Stories
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Stay in the Loop
          </h3>
          <p className="text-sm mb-4 text-gray-600">
            Get the latest remote jobs and hiring tips straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 text-white text-sm rounded-md hover:bg-emerald-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white border-t border-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} JobHunt. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-emerald-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-600">
              Terms
            </a>
            <a href="#" className="hover:text-emerald-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
