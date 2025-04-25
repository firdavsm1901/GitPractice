import React, { useState } from "react";
import { MapPin, Star } from "lucide-react";

const CompanyCard = ({ company }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage =
    "https://eaog2nkqckp.exactdn.com/wp-content/uploads/2022/12/611573db674f3342d299a89a_Product_Demo_Featured-1140x768@2x-80-min.jpeg";

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden w-full max-w-sm">
      {/* Main Image */}
      <img
        src={imageError || !company.image ? fallbackImage : company.image}
        alt={`${company.name} cover`}
        className="w-full h-40 object-cover"
        onError={() => setImageError(true)}
      />

      <div className="p-4">
        {/* Logo & Name */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src={company.logo}
            alt={company.name}
            className="w-8 h-8 object-cover rounded-full"
          />
          <h3 className="text-lg font-semibold">{company.name}</h3>
          {company.verified && (
            <span className="text-green-500 text-sm">✔</span>
          )}
        </div>

        {/* Location & Rating */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{company.location}</span>
          <Star className="w-4 h-4 text-green-600" />
          <span className="text-green-600 font-medium">{company.rating}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {company.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-emerald-50 text-emerald-800 px-3 py-1 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Jobs Available */}
        <p className="text-sm text-gray-700 font-medium">
          <span className="text-emerald-600">{company.jobs}</span> jobs
          available
        </p>
      </div>
    </div>
  );
};

export default CompanyCard;
