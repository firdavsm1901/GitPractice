import React from "react";
import CompanyCard from "../CompanyCard/CompanyCard";

const exampleCompanies = [
  {
    name: "Uxper",
    location: "New York",
    rating: "5.0",
    tags: ["Software"],
    jobs: 12,
    logo: "https://via.placeholder.com/32/FF007F/FFFFFF?text=U",
    image:
      "https://images.unsplash.com/photo-1600891965059-41c3f40c1150?auto=format&fit=crop&w=800&q=80",
    verified: true,
  },
  {
    name: "AngelList",
    location: "Chicago",
    rating: "4.5",
    tags: ["B2B SaaS", "SaaS"],
    jobs: 2,
    logo: "https://media.bizj.us/view/img/2493581/angellist-laws-2-041814*1200xx4448-3346-0-0.jpg",
    image:
      "https://images.unsplash.com/photo-1581092160612-9e3e7f9fbb93?auto=format&fit=crop&w=800&q=80",
    verified: false,
  },
  {
    name: "Giveth",
    location: "New York",
    rating: "5.0",
    tags: ["Ecommerce"],
    jobs: 4,
    logo: "https://via.placeholder.com/32/7F00FF/FFFFFF?text=G",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    verified: true,
  },
];

const RemoteCompaniesSection = () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 mt-6">
        Companies that let you work remotely
      </h2>
      <p className="text-gray-600 mb-15">Find companies that deserve you!</p>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {exampleCompanies.map((company, i) => (
          <CompanyCard key={i} company={company} />
        ))}
      </div>

      {/* View All Companies Link */}
      <a
        href="/companies"
        className="inline-block text-emerald-600 font-semibold text-sm hover:underline transition"
      >
        View all companies →
      </a>
    </section>
  );
};

export default RemoteCompaniesSection;
