import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/hero/Hero";
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";
import BannerVideo from "../../components/BannerVideo/BannerVideo";
import RemoteCompaniesSection from "../../components/RemoteCompaniesSection/RemoteCompaniesSection";
import Footer from "../../components/Footer/Footer";
import NewsletterBar from "../../components/NewsLetterBar/NewsLetterBar";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryGrid />
      <FeaturedJobs />
      <BannerVideo />
      <RemoteCompaniesSection />
      <TestimonialCarousel />
      <NewsletterBar />
      <Footer />
    </div>
  );
}

export default Home;
