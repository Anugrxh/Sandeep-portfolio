import React from "react";

const Services = ({ isVisible }) => {
  const serviceItems = [
    {
      icon: "💪",
      title: "One-on-One Coaching",
      description:
        "Personalized training sessions designed specifically for your body and goals, ensuring maximum effectiveness and safety.",
    },
    {
      icon: "🍎",
      title: "Nutrition Guidance",
      description:
        "Comprehensive nutritional advice and meal planning to complement your training and accelerate your results.",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description:
        "Regular assessments and detailed progress tracking to keep you motivated and on the right path.",
    },
    {
      icon: "💻",
      title: "Online Classes",
      description:
        "Join interactive online sessions from the comfort of your home, bringing professional coaching directly to you.",
    },
    {
      icon: "👥",
      title: "Group Classes",
      description:
        "Train together in a motivating group environment while still receiving expert guidance and structured plans.",
    },
  ];

  return (
    <section
      id="services"
      className={`py-20 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-lime-400 mb-12 animate-fade-in-up">
          My Services
        </h2>

        {/* First Row (3 services) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {serviceItems.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 group ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="text-5xl text-lime-400 mb-6 group-hover:text-lime-300 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row (2 services spanning 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {serviceItems.slice(3).map((service, index) => (
            <div
              key={index + 3}
              className={`p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 group md:col-span-3 lg:col-span-3 ${
                isVisible ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${(index + 3) * 0.1}s`,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="text-5xl text-lime-400 mb-6 group-hover:text-lime-300 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
