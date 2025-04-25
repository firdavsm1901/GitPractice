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
      <Hero
        heading="Find world’s best"
        highlights={["remote job", "online job", "freelance job"]}
        subheading="Discover the best remote and work from home jobs at top remote companies."
        categories={["All Categories", "Software Engineer", "Consulting"]}
        stats={[
          { label: "Jobs submitted", value: "60K+" },
          { label: "Monthly Users", value: "30K+" },
        ]}
        popularSearches={["Software Engineer", "Consulting"]}
        imageUrl="https://civi.uxper.co/wp-content/uploads/2023/01/image-home-03.webp"
      />
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
