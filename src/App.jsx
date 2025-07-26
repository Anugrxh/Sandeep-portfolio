// 

import React, { useState, useEffect } from "react";

// Import section components

import Hero from "./sections/Hero";

import About from "./sections/About";

import DynamicTrainerBackground from "./sections/DynamicTrainerBackground";

import TrainerGallery from "./sections/TrainerGallery";

import Services from "./sections/Services";

import ClientTransformations from "./sections/ClientTransformations";

import WorkoutGallery from "./sections/WorkoutGallery";

import Videos from "./sections/Experience";

import Testimonials from "./sections/Testimonials";

import Contact from "./sections/Contact";

import Footer from "./sections/Footer";



// If sandeep_bg.jpg is used directly in App.js for a global background, keep this import.

// Otherwise, if it's only used within DynamicTrainerBackground.jsx, you can remove it from here.

import sandeep_bg from "./assets/sandeep_bg.jpg";
import Experience from "./sections/Experience";



// Main App component for the Personal Trainer Portfolio

const App = () => {

const [activeLink, setActiveLink] = useState("home");

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const [parallaxOffset, setParallaxOffset] = useState(0);



const scrollToSection = (id) => {

const element = document.getElementById(id);

if (element) {

element.scrollIntoView({ behavior: "smooth" });

setActiveLink(id);

setIsMobileMenuOpen(false);

}

};



const [isVisible, setIsVisible] = useState({});



// Effect for Intersection Observer to detect section visibility

useEffect(() => {

const observer = new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));

} else {

setIsVisible((prev) => ({ ...prev, [entry.target.id]: false }));

}

});

},

{ threshold: 0.1 }

);



[

"about",

"dynamic-trainer-background",

"trainer-gallery",

"services",

"client-transformations",

"workout-gallery",

"experience",

"testimonials",

"contact",

].forEach((id) => {

const element = document.getElementById(id);

if (element) {

observer.observe(element);

}

});



return () => {

observer.disconnect();

};

}, []);



// Effect for parallax scrolling

useEffect(() => {

const handleScroll = () => {

setParallaxOffset(window.scrollY * 0.4);

};



window.addEventListener("scroll", handleScroll);

return () => window.removeEventListener("scroll", handleScroll);

}, []);



return (

<div className="min-h-screen bg-gray-950 text-gray-100 font-inter overflow-x-hidden">

{/* Navigation Bar */}

<nav className="fixed w-full z-50 bg-black bg-opacity-10 shadow-lg py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-sm">

<div className="text-2xl font-bold text-lime-400">

Sandeep Balakrishnan

</div>

<ul className="hidden md:flex space-x-8">

{["home", "about", "services", "testimonials", "contact"].map(

(link) => (

<li key={link}>

<button

onClick={() => scrollToSection(link)}

className={`text-lg font-medium transition-colors duration-300 hover:text-lime-400 ${

activeLink === link ? "text-lime-400" : "text-gray-300"

}`}

>

{link.charAt(0).toUpperCase() +

link.slice(1).replace(/-/g, " ")}

</button>

</li>

)

)}

</ul>

{/* Mobile Menu Button (Hamburger Icon) */}

<div className="md:hidden">

<button

onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

className="text-lime-300 hover:text-lime-400 focus:outline-none"

>

<svg

className="w-8 h-8"

fill="none"

stroke="currentColor"

viewBox="0 0 24 24"

xmlns="http://www.w3.org/2000/svg"

>

<path

strokeLinecap="round"

strokeLinejoin="round"

strokeWidth="2"

d={

isMobileMenuOpen

? "M6 18L18 6M6 6l12 12"

: "M4 6h16M4 12h16m-7 6h7"

}

></path>

</svg>

</button>

</div>

</nav>



{/* Mobile Menu Overlay */}

<div

className={`fixed inset-0 bg-black bg-opacity-90 z-40 transform ${

isMobileMenuOpen ? "translate-x-0" : "translate-x-full"

} transition-transform duration-300 ease-in-out md:hidden`}

>

<ul className="flex flex-col items-center justify-center h-full space-y-8">

{["home", "about", "services", "testimonials", "contact"].map(

(link) => (

<li key={link}>

<button

onClick={() => scrollToSection(link)}

className="text-3xl font-bold text-gray-200 hover:text-lime-400 transition-colors duration-300"

>

{link.charAt(0).toUpperCase() +

link.slice(1).replace(/-/g, " ")}

</button>

</li>

)

)}

</ul>

</div>



{/* Render Section Components */}

<Hero scrollToSection={scrollToSection} />

<About isVisible={isVisible["about"]} />

<DynamicTrainerBackground

isVisible={isVisible["dynamic-trainer-background"]}

parallaxOffset={parallaxOffset}

/>

<TrainerGallery isVisible={isVisible["trainer-gallery"]} />

<Services isVisible={isVisible["services"]} />

<ClientTransformations isVisible={isVisible["client-transformations"]} />

<WorkoutGallery isVisible={isVisible["workout-gallery"]} />


 <Experience isVisible={isVisible["experience"]} />

<Testimonials isVisible={isVisible["testimonials"]} />

<Contact isVisible={isVisible["contact"]} />

<Footer />

</div>

);

};



export default App;