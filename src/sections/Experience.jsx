import React from "react";

// Import your certification images from src/assets
// Adjust the paths and filenames based on your actual file structure
import diplomaImage from '../assets/diploma.jpg'; // Example path
import firstAidImage from '../assets/fid.PNG'; // Example path
import fitnessExtremeLogo from '../assets/fitness_extream.png'; // Example path
import powersLogo from '../assets/powers.png'; // Example path
import trx from '../assets/trx.png'; // Example path
// import anyOtherCertImage from '../assets/your-cert-image.jpg'; // Add more as needed

const Experience = ({ isVisible }) => {
  const experienceItems = [
    {
      title: "Diploma in Level 2 and 3 Personal Training ",
      description:
        "Personal Training Academy Global (PTA Global), 2020",
      image: diplomaImage, // Changed 'icon' to 'image' and assigned imported image
      type: "summary",
    },
    {
      title: "Emergency First Aid, Defibrillation & CPR – Level 2 Certification",
      description:
        "ADEPT Training Institute LLC, 2020",
      image: firstAidImage, 
      type: "summary",
    },
    {
      title: "TRX Suspension Training(English) Certification",
      description:
        "By TRX Training,Nov 23 2021",
      image: trx, 
      type: "summary",
    },
    {
      title: "Personal Trainer",
      company: "Fitness Extreme",
      location: "Dubai, UAE",
      dates: "May 2017 - 2022",
      logo: fitnessExtremeLogo,
      type: "work",
    },
    {
      title: "Fitness Trainer",
      company: "Power's Gym",
      location: "Kannur, Kerala, India", // Current location is India
      dates: "May 2015 - Apr 2017",
      logo: powersLogo, // Placeholder for Power's Gym logo
      type: "work",
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-lime-400 mb-12 animate-fade-in-up">
          My Experience & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 group flex flex-col items-center text-center ${
                isVisible ? "animate-scale-in" : ""
              }`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {item.type === "summary" ? (
                // Content for certifications (summary type)
                <>
                  {item.image && ( // Conditionally render image if available
                    <img
                      src={item.image}
                      alt={item.title} // Use title as alt text for accessibility
                      className="w-24 h-24 object-contain mb-4 filter drop-shadow-lg" // Adjust size and styling as needed
                    />
                  )}
                  <h3 className="text-3xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </>
              ) : (
                // Content for work experience items
                <>
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`${item.company} Logo`}
                      className="w-24 h-24 rounded-full mb-4 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/100x100/A7F3D0/065F46?text=Logo`;
                      }}
                    />
                  )}
                  <h3 className="text-3xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xl text-lime-300 mb-1">{item.company}</p>
                  <p className="text-gray-300 mb-1">{item.location}</p>
                  <p className="text-gray-400 text-sm">{item.dates}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;