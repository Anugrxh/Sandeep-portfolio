import React from "react";

const Testimonials = ({ isVisible }) => {
  const testimonials = [
    {
      type: "video", // First testimonial is a video
      src: "https://www.w3schools.com/html/mov_bbb.mp4", // <--- REPLACE WITH YOUR VIDEO FILE PATH
      author: "Jane Doe, Weight Loss Client",
      caption: "Jane's amazing transformation story!",
    },
    {
      type: "video", // Second testimonial is a video
      src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // <--- REPLACE WITH YOUR VIDEO FILE PATH
      author: "John Smith, Strength Training Client",
      caption: "John talks about crushing his strength goals!",
    },
    
    
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-lime-400 mb-12 animate-fade-in-up">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-xl border border-gray-700 hover:border-lime-500 transition-all duration-300 flex flex-col justify-between ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {testimonial.type === "text" ? (
                // Text Testimonial Content
                <div className="p-8 flex flex-col justify-between h-full"> {/* Added h-full for consistent height */}
                  <p className="text-lg italic text-gray-300 mb-6">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-white">
                    - {testimonial.author}
                  </p>
                </div>
              ) : (
                // Video Testimonial Content (with author name)
                <div className="p-4 flex flex-col items-center justify-center">
                  {/* Wrapper for consistent video aspect ratio */}
                  <div className="w-full relative pt-[56.25%] rounded-lg overflow-hidden mb-4">
                    {/* pt-[56.25%] creates a 16:9 aspect ratio (9 / 16 * 100 = 56.25) */}
                    {/* You can change this value for a different aspect ratio, e.g., pt-[75%] for 4:3, or pt-[100%] for 1:1 (square) */}
                    <video
                      controls
                      muted
                      autoPlay 
                      loop
                      preload="metadata"
                      className="absolute top-0 left-0 w-full h-full object-cover" // Video fills the aspect ratio container
                      aria-label={testimonial.caption || `Client testimonial from ${testimonial.author}`}
                    >
                      <source src={testimonial.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {testimonial.caption && (
                    <p className="text-sm text-gray-400 text-center mb-2">
                      {testimonial.caption}
                    </p>
                  )}
                  {/* Client Name for Video Testimonial */}
                  <p className="font-semibold text-white text-center">
                    - {testimonial.author}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;