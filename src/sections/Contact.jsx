import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    emailjs
      .send(
        "service_0lnau1h", // Replace with your EmailJS service ID
        "template_re28fk6", // Replace with your EmailJS template ID
        formData,
        "NQqWqQzSvkjXMnsd_" // Replace with your EmailJS user/public key
      )
      .then(
        (response) => {
          setLoading(false);
          setFeedback("Message sent successfully! Thank you.");
          setFormData({ user_name: "", user_email: "", user_phone: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setFeedback("Failed to send message. Please try again.(Under Development)");
          console.error("EmailJS error:", error);
        }
      );
  };

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
        <div className="max-w-2xl mx-auto bg-gray-800 p-10 rounded-xl shadow-xl">
          <p className="text-lg text-gray-300 mb-8">
            Ready to start your fitness journey? Fill out the form below or
            reach out directly!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all duration-300 border border-gray-600"
            />
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all duration-300 border border-gray-600"
            />
            <input
              type="tel"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all duration-300 border border-gray-600"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all duration-300 border border-gray-600"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {feedback && (
            <p className="mt-6 text-center text-sm text-lime-400">{feedback}</p>
          )}
          <div className="mt-8 text-gray-400">
            <p>
              Email:{" "}
              <a
                href="mailto:sandeepbalakrishnanfitness@gmail.com
"
                className="text-lime-400 hover:underline"
              >
                sandeepbalakrishnanfitness@gmail.com

              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919061855859"
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
