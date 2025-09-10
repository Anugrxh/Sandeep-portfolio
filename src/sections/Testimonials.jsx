import React from "react";

// Import your 5 local video files
import video1 from "../assets/c1.mp4";
import video2 from "../assets/c2.mp4";
import video3 from "../assets/33.mp4";
import video4 from "../assets/c44.mp4";
import video5 from "../assets/c5.mp4";
import video6 from "../assets/c7.mp4";



const Testimonials = ({ isVisible }) => {
  const testimonials = [
    { src: video1 },
    { src: video2 },
    { src: video3 },
    { src: video4 },
    { src: video5 },
    { src: video6 },
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-12 animate-fade-in-up">
          Client Video Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl shadow-lg p-4 transition-transform duration-300 hover:scale-105 mx-auto ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s`, maxWidth: "350px", width: "100%" }}
            >
              <video
                controls
                muted
                preload="metadata"
                className="rounded-lg object-cover w-full"
                style={{ aspectRatio: "9 / 16" }}
                src={testimonial.src}
                aria-label={`Client testimonial video ${index + 1}`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;