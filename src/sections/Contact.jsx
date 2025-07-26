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
                href="tel:+971582113364 "
                className="text-lime-400 hover:underline"
              >
                +971582113364 
              </a>
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.instagram.com/your_instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-600 transition-colors duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2.417a.75.75 0 01.75 0 11.25 11.25 0 014.995 1.498 12.75 12.75 0 012.31 3.322c.264.88.407 1.761.407 2.642V12a.75.75 0 01-.75.75H18a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75v-8.25a.75.75 0 00-.75-.75H3.75A.75.75 0 013 12V9.75c0-.88.143-1.761.407-2.642a12.75 12.75 0 012.31-3.322 11.25 11.25 0 014.995-1.498.75.75 0 01.75 0zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM12 12a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-600 transition-colors duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 1.947.558 3.766 1.528 5.334L2 22l4.673-1.229c1.472.804 3.167 1.251 4.878 1.251 5.522 0 9.999-4.477 9.999-9.999S17.523 2.002 12.001 2.002zm3.633 14.133c-.201.332-.472.366-.743.333-.271-.033-.668-.166-1.139-.366-.47-.2-.939-.333-1.41-.333-.471 0-.939.133-1.41.333-.47.2-.939.333-1.41.333-.471 0-.939-.133-1.41-.333-.47-.2-.939-.333-1.41-.333-.271 0-.542-.033-.743-.366-.201-.332-.201-.665-.201-.998 0-.333 0-.666.201-.998.201-.332.472-.366.743-.333.271.033.668.166 1.139.366.47.2.939.333 1.41.333.471 0 .939-.133 1.41-.333.47-.2.939-.333 1.41-.333.471 0 .939.133 1.41.333.271 0 .542.033.743.366.201.332.201.665.201.998 0 .333 0 .666-.201.998z" />
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-lime-400 hover:text-lime-600 transition-colors duration-300"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M1.5 8.67a3.75 3.75 0 013.75-3.75h14.25a3.75 3.75 0 013.75 3.75v6.75a3.75 3.75 0 01-3.75 3.75H5.25a3.75 3.75 0 01-3.75-3.75V8.67zM22.5 8.25l-10.5 7.5L1.5 8.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;