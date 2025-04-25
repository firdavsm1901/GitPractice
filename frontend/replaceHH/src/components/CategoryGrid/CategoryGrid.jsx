import React from "react";
import { Code, Target, Headphones, Palette, Leaf, User } from "lucide-react";

const categories = [
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "Development & IT",
    jobs: 16,
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Marketing & Sales",
    jobs: 9,
  },
  {
    icon: <Headphones className="w-6 h-6 text-white" />,
    title: "Customer Service",
    jobs: 8,
  },
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "Design & Creative",
    jobs: 12,
  },
  {
    icon: <Leaf className="w-6 h-6 text-white" />,
    title: "Product Management",
    jobs: 12,
  },
  {
    icon: <User className="w-6 h-6 text-white" />,
    title: "Writing & Translation",
    jobs: 2,
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Browse by category
        </h2>
        <p className="text-lg text-gray-600 mt-2 mb-10">
          Browse openings in those categories
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-[#f3f8f6] p-6 rounded-2xl shadow-sm flex flex-col items-center hover:shadow-md transition"
            >
              <div className="bg-green-700 p-3 rounded-full mb-4">
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {cat.title}
              </h3>
              <p className="text-base text-gray-600 mt-1">{cat.jobs} jobs</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="text-green-700 font-bold underline hover:no-underline"
          >
            View all categories
          </a>
        </div>
      </div>
    </section>
  );
}
