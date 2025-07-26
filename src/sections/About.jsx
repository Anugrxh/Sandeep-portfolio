import React from "react";
import sandeepAboumeImage from "../assets/sandeep_aboutme.jpg"; // Adjust path as needed

const About = ({ isVisible }) => {
  return (
    <section
      id="about"
      className={`py-20 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src={sandeepAboumeImage}
            alt="Personal Trainer"
            className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-lime-400 mb-6 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4 animate-fade-in-up delay-100">
            Hello! I'm Sandeep Balakrishnan, a certified personal trainer with a
            passion for helping individuals achieve their fitness aspirations.
            With 10+ years of experience, I specialize in strength training,
            weight loss, functional fitness, and nutrition guidance.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4 animate-fade-in-up delay-200">
            As a fitness professional and Personal Trainer, I bring 10+ years of rich experience
            from reputed Gym and Fitness centers in Dubai, UAE, and Kerala, India.
            My qualifications include a Diploma in Level 2 and 3 Personal Training,
            Emergency First Aid, Defibrillation & CPR – Level 2 Certification, and a B.Com degree.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-up delay-300">
            My approach is holistic, focusing not just on physical
            transformation but also on building sustainable habits and a
            positive mindset. I'm deeply passionate about improving the health, wellness, and quality of life
            of my clients, and I'm here to guide, motivate, and empower you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;