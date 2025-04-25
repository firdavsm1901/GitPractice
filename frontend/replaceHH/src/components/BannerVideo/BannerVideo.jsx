import React from "react";
import video from "../../assets/video/mov_bbb.mp4";

const BannerVideo = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full mt-7">
        <div className="text-center text-white px-4">
          <p className="uppercase tracking-widest text-sm font-medium mb-4">
            Candidate
          </p>
          <h1 className="text-[3vw] font-bold mb-6">Find your dream job</h1>
          <p className="text-[1.5vw] mb-8 max-w-2xl mx-auto">
            Recruiters looking for remote talent can find your resume based on
            keywords, job titles, skills, and more.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition">
            Post a resume today
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
