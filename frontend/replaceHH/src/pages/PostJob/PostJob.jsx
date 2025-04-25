import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/hero/Hero";

function PostJob() {
  return (
    <div>
      <Header />
      <Hero
        heading="Looking to post a job?"
        highlights={[
          "Find professionals",
          "From around the world",
          "Across all skills",
        ]}
        subheading="Find professionals from around the world and across all skills."
        categories={[
          "All Skills",
          "Design",
          "Development",
          "Marketing",
          "Writing",
        ]}
        stats={[
          { label: "Professionals Available", value: "100K+" },
          { label: "Skills Listed", value: "50+" },
        ]}
        popularSearches={["Designers", "Developers", "Writers", "Marketers"]}
        imageUrl="https://civi.uxper.co/wp-content/uploads/2023/03/Group-49384.webp"
        showSearch={false} // hide the input/search bar
        showHighlights={false}
        largeImage={true} // hide the animated Typewriter text
      />
      <PostJob />
    </div>
  );
}

export default PostJob;
