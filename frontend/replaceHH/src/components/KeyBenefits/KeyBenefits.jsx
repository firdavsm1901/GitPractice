import React from "react";

const benefits = [
  {
    icon: "/icons/post-time.svg", // You can replace these with your SVG or image paths
    title: "2 minutes to post",
    description:
      "Quick and easy to post job posting with highly optimised job posting form",
  },
  {
    icon: "/icons/attract-audience.svg",
    title: "Attract audience",
    description: "Reach to over 88.9 million talented jobseekers",
  },
  {
    icon: "/icons/visibility.svg",
    title: "30 days visibility",
    description:
      "Get quality applies guaranteed with 30 days visibility of your job ads.",
  },
];

function KeyBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Key benefits</h2>
        <p className="text-gray-500 mb-12">Why choose Civi job posting?</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-6">
                <img src={benefit.icon} alt={benefit.title} className="h-14" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyBenefits;
