// components/JobCard.jsx
import React from "react";
import { BadgeCheck, Zap, Heart } from "lucide-react";

export default function JobCard({
  logo,
  title,
  company,
  category,
  tags,
  location,
  pay,
  deadline,
}) {
  return (
    <div className="border border-yellow-200 rounded-xl p-5 shadow-sm hover:shadow-md transition relative bg-white">
      <div className="flex items-start gap-3 mb-7">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
          {logo}
        </div>
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">
            by <span className="font-medium text-black">{company}</span> in{" "}
            <span className="text-green-700">{category}</span>
          </p>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <BadgeCheck className="text-yellow-500 w-5 h-5" />
          <Zap className="text-red-500 w-5 h-5" />
          <Heart className="text-gray-400 w-5 h-5 hover:text-gray-600 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4 mb-10">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-sm px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
        {location && (
          <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
            {location}
          </span>
        )}
        {pay && (
          <span className="text-sm px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-medium">
            {pay}
          </span>
        )}
      </div>

      <p className="text-green-700 text-sm font-medium mt-3">
        {deadline} days left to apply
      </p>
    </div>
  );
}
