import React from "react";
import sandeep_bg from "../assets/sandeep_bg.jpg"; 

const DynamicTrainerBackground = ({ isVisible, parallaxOffset }) => {
  return (
    <section
      id="dynamic-trainer-background"
      className={`relative h-[600px] flex items-center justify-center text-center bg-cover bg-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: `url(${sandeep_bg})`,
        backgroundAttachment: 'fixed', // This is the key change
        backgroundPosition: 'center center', // Reset to center center for fixed background
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8">
        <h2 className="text-5xl font-extrabold text-white animate-fade-in-up">
          Train with the Best
        </h2>
        <p className="text-xl text-gray-300 mt-4 animate-fade-in-up delay-100">
          Experience personalized coaching that gets results.
        </p>
      </div>
    </section>
  );
};

export default DynamicTrainerBackground;