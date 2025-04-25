import React from "react";
import Typewriter from "typewriter-effect";

const Hero = ({
  heading = "Find world’s best",
  highlights = ["remote job", "online job", "freelance job"],
  subheading = "Discover the best remote and work from home jobs at top remote companies.",
  categories = ["All Categories", "Software Engineer", "Consulting"],
  stats = [
    { label: "Jobs submitted", value: "60K+" },
    { label: "Monthly Users", value: "30K+" },
  ],
  popularSearches = ["Software Engineer", "Consulting"],
  imageUrl = "https://civi.uxper.co/wp-content/uploads/2023/01/image-home-03.webp",
  showSearch = true,
  showHighlights = true,
  largeImage = false,
}) => {
  return (
    <section className="bg-[#fef9f1] text-gray-800 body-font">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
            {heading}
            {showHighlights && (
              <>
                <br className="hidden lg:inline-block" />
                <span className="text-green-700 inline-block">
                  <Typewriter
                    options={{
                      strings: highlights,
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 40,
                    }}
                  />
                </span>
              </>
            )}
          </h1>

          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            {subheading}
          </p>

          {showSearch && (
            <div className="w-full max-w-2xl mb-6">
              <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-full overflow-hidden">
                <input
                  className="flex-grow px-6 py-3 text-gray-700 focus:outline-none"
                  type="text"
                  placeholder="Jobs title or keywords"
                />
                <select className="bg-white px-6 py-3 text-gray-700 border-t sm:border-t-0 sm:border-l border-gray-200 focus:outline-none">
                  {categories.map((cat, idx) => (
                    <option key={idx}>{cat}</option>
                  ))}
                </select>
                <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3">
                  Search
                </button>
              </div>
            </div>
          )}

          {showSearch && (
            <p className="text-gray-600 mb-10">
              Popular Searches:{" "}
              <span className="font-semibold text-gray-900">
                {popularSearches.join(", ")}
              </span>
            </p>
          )}

          <div className="flex gap-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-bold text-green-700">
                  {stat.value}
                </p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${
            largeImage ? "lg:max-w-3xl" : "lg:max-w-lg"
          } lg:w-full md:w-1/2 w-5/6`}
        >
          <img
            className="object-cover object-center rounded w-full h-full"
            alt="hero"
            src={imageUrl}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
