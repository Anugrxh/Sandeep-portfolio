import React from "react";

const Contact = ({ isVisible }) => {
  return (
    <section
      id="contact"
      className={`py-20 bg-black transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-lime-400 mb-12 animate-fade-in-up">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-800 p-10 rounded-xl shadow-xl"
        
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to start your fitness journey? Fill out the form below or
            reach out directly!
          </p>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all duration-300 border border-gray-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all duration-300 border border-gray-600"
              />
            </div>
             <div>
              <input
                type="phone"
                placeholder="Your Phone Number"
                className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all duration-300 border border-gray-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all duration-300 border border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-gray-400">
            <p>
              Email:{" "}
              <a
                href="mailto:sandeepmv283@gmail.com"
                className="text-lime-400 hover:underline"
              >
                sandeepmv283@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919061855859 "
                className="text-lime-400 hover:underline"
              >
                +91 9061855859 
              </a>
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;