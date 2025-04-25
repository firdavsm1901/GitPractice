// TestimonialCarousel.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgDot from "../../assets/image/worldDot.png";

const testimonials = [
  {
    name: "Cristofer George",
    title: "Designer at Shopify",
    image: "/avatars/avatar1.png", // Replace with your actual image paths
    message:
      "I really love this theme. It has a beautiful design. From the web developer point of view, it's also really simple to use. And above all, customer support is awesome.",
  },
  {
    name: "Jane Doe",
    title: "Developer at RemoteCo",
    image: "/avatars/avatar2.png",
    message:
      "This theme boosted our team's productivity and gave our project a polished look. Highly recommend it!",
  },
  {
    name: "John Smith",
    title: "Freelancer",
    image: "/avatars/avatar3.png",
    message:
      "It’s intuitive, well-documented, and just works beautifully. Great job by the developers.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative text-center py-16 px-4 bg-[#fdf8f4] overflow-hidden">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover pointer-events-none"
        style={{
          backgroundImage: `url(${imgDot})`,
          opacity: 0.3, // 👈 Set opacity here
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-2">Kind words from happy</h2>
        <h2 className="text-3xl font-bold mb-6">remote workers</h2>

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="mx-auto rounded-full w-20 h-20 mb-4 object-cover"
        />
        <p className="text-lg font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-500 mb-6">{testimonial.title}</p>

        <blockquote className="text-xl text-gray-700 max-w-3xl mx-auto italic mb-8">
          “ {testimonial.message} ”
        </blockquote>

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prev}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-green-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
