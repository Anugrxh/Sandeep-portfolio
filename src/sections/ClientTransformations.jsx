import React from "react";

const ClientTransformations = ({ isVisible }) => {
  const clients = [
    {
      before:
        "https://placehold.co/300x400/1f2937/a3e635?text=Client+Before+1",
      after: "https://placehold.co/300x400/a3e635/1f2937?text=Client+After+1",
      name: "Client A",
    },
    {
      before:
        "https://placehold.co/300x400/1f2937/a3e635?text=Client+Before+2",
      after: "https://placehold.co/300x400/a3e635/1f2937?text=Client+After+2",
      name: "Client B",
    },
    {
      before:
        "https://placehold.co/300x400/1f2937/a3e635?text=Client+Before+3",
      after: "https://placehold.co/300x400/a3e635/1f2937?text=Client+After+3",
      name: "Client C",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ${
                isVisible ? "animate-scale-in" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: "rgba(255, 255, 255, 0.08)", // Slightly more transparent white
                backdropFilter: "blur(8px)", // Glass blur effect
                WebkitBackdropFilter: "blur(8px)", // For Safari support
                border: "1px solid rgba(255, 255, 255, 0.15)", // Subtle border for definition
              }}
            >
              <div className="flex justify-around items-center mb-4">
                <img
                  src={client.before}
                  alt={`${client.name} Before`}
                  className="w-1/2 h-auto rounded-lg mr-2"
                />
                <img
                  src={client.after}
                  alt={`${client.name} After`}
                  className="w-1/2 h-auto rounded-lg ml-2"
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