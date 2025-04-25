// components/FeaturedJobs.jsx
import React, { useState } from "react";
import JobCard from "../JobCard/JobCard";

export default function FeaturedJobs() {
  const allJobs = [
    {
      logo: "😊",
      title: "Sr. Backend Go Developer",
      company: "Uxper",
      category: "Development & IT",
      tags: ["Remote"],
      location: "Ashkasham",
      pay: "$100 - $200/month",
      deadline: 130,
    },
    {
      logo: "🌌",
      title: "UX/UI Designer",
      company: "Nightfall",
      category: "Design & Creative",
      tags: ["Remote"],
      location: "California",
      pay: "$450 - $900/month",
      deadline: 88,
    },
    {
      logo: "📢",
      title: "Senior Product Marketing Manager",
      company: "Descript",
      category: "Marketing & Sales",
      tags: ["Full Time"],
      location: "Ab e Kamari",
      pay: "$250 - $300/week",
      deadline: 88,
    },
    {
      logo: "🌀",
      title: "Senior Website Product Manager",
      company: "Mercury",
      category: "Design & Creative",
      tags: ["Remote"],
      location: "San Francisco",
      pay: "Max:$1,000/month",
      deadline: 88,
    },
    {
      logo: "💡",
      title: "AI Researcher",
      company: "OpenAI",
      category: "Development & IT",
      tags: ["Remote"],
      location: "Global",
      pay: "$5000/month",
      deadline: 70,
    },
    {
      logo: "🎯",
      title: "Growth Marketing Lead",
      company: "Startly",
      category: "Marketing & Sales",
      tags: ["Remote"],
      location: "New York",
      pay: "$3,000/month",
      deadline: 95,
    },
  ];

  const [visibleJobs, setVisibleJobs] = useState(4);

  const handleLoadMore = () => {
    setVisibleJobs((prev) => prev + 2);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Featured remote jobs
        </h2>
        <p className="text-lg text-gray-600 mt-2 mb-10 text-center">
          Explore 1K+ remote job opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allJobs.slice(0, visibleJobs).map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>

        {visibleJobs < allJobs.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-sm font-medium transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
