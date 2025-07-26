import React from "react";
import sandeepImage from "../assets/sandeep.jpg"; // Adjust path as needed

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${sandeepImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
          Transform Yourself
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
          Expert Personal Training Tailored to Your Goals.
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up delay-400"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;