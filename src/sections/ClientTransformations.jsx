import React from "react";
import devis2 from '../assets/devis2.jpg';
import priyanka from '../assets/priyanka.jpg';
import shafeek from '../assets/shafeek.jpg';
import kannan from '../assets/kannan.jpg';

const ClientTransformations = ({ isVisible }) => {
  const clients = [
    {
      image: devis2,
      name: "Devis",
    },
    {
      image: priyanka,
      name: "Priyanka",
    },
    {
      image: shafeek,
      name: "Shafeek",
    },
    {
      image: kannan,
      name: "Kannan",
    },
  ];

  return (
    <section
      id="client-transformations"
      className={`py-20 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-lime-400 mb-12 animate-fade-in-up">
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ${
                isVisible ? "animate-scale-in" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-3/4 h-auto rounded-lg"
                />
              </div>
              <p className="font-semibold text-white">{client.name}</p>
              <p className="text-sm text-gray-400">Transformation Journey</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTransformations;
