import React from "react";
import workoutVideo1 from '../assets/workout_v1.mp4';
import workoutVideo2 from '../assets/workout_v2.mp4';
import workoutVideo3 from '../assets/workout_v3.mp4';
import workoutVideo4 from '../assets/workout_v4.mp4';

import workoutImage1 from '../assets/workout_p1.jpg';
import workoutImage2 from '../assets/workout_p2.jpg';
import workoutImage3 from '../assets/workout_p3.jpg';
import workoutImage4 from '../assets/workout_p4.jpg';



const WorkoutGallery = ({ isVisible }) => {
  const media = [
    { type: "image", src: workoutImage1 },
     { type: "video", src: workoutVideo1 },
    { type: "image", src: workoutImage2 },
    { type: "video", src: workoutVideo2 },
    { type: "image", src: workoutImage3 },
    { type: "video", src: workoutVideo3 },
    { type: "image", src: workoutImage4 },
    { type: "video", src: workoutVideo4 },
  ];

  
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