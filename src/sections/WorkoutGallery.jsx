import React from "react";

// If you're using local video files, import them like this:
// import workoutVideo1 from '../assets/videos/workout1.mp4';
// import workoutVideo2 from '../assets/videos/workout2.mp4';
// import workoutVideo3 from '../assets/videos/workout3.mp4';
// import workoutVideo4 from '../assets/videos/workout4.mp4';

const WorkoutGallery = ({ isVisible }) => {
  const media = [
    { type: "image", src: "https://placehold.co/400x300/1f2937/a3e635?text=Workout+1" },
     { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://placehold.co/400x300/1f2937/a3e635?text=Workout+2" },
    { type: "video", src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
    { type: "image", src: "https://placehold.co/400x300/1f2937/a3e635?text=Workout+3" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://placehold.co/400x300/1f2937/a3e635?text=Workout+4" },
    { type: "video", src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  ];

  // Define a consistent height for your media items.
  // You can adjust 'h-64' (256px) to your preferred height.
  const mediaHeightClass = "h-64";

  return (
    <section
      id="workout-gallery"
      className={`py-20 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-lime-400 mb-12 animate-fade-in-up">
          Workouts in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {media.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-500 group ${
                isVisible ? "animate-scale-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* This inner div ensures consistent height */}
              <div className={`w-full ${mediaHeightClass}`}>
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Workout Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                ) : (
                  <video
                    controls
                    muted
                    autoPlay 
                    loop 
                    playsInline 
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutGallery;