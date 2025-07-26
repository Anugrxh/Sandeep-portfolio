import React, { useState, useEffect, useRef } from "react";

// Corrected import paths
import trainer_image1 from "../assets/trainer_image1.jpg";
import trainer_image2 from "../assets/trainer_image2.PNG";
import trainer_image3 from "../assets/trainer_image3.jpg";
import trainer_image4 from "../assets/trainer_image4.jpg";

const TrainerGallery = () => {
  const images = [
    trainer_image1,
    trainer_image2,
    trainer_image3,
    trainer_image4,
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(-1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const totalImages = images.length;
    if (totalImages === 0) return;

    const hoverDuration = 1000; // 1 second hover
    const transitionDelay = 500; // 0.5 second delay before next hover starts

    let sequenceIndex = 0; // Start with the first image

    const startAnimationLoop = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setActiveImageIndex(sequenceIndex);

        timeoutRef.current = setTimeout(() => {
          setActiveImageIndex(-1); // Unhover

          sequenceIndex = (sequenceIndex + 1) % totalImages;
          startAnimationLoop(); // Loop
        }, hoverDuration);
      }, transitionDelay);
    };

    // Start the animation immediately
    startAnimationLoop();

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setActiveImageIndex(-1);
    };
  }, [images.length]);

  return (
    <section
      id="trainer-gallery"
      className={`py-20 bg-black opacity-100 translate-y-0`}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-lime-400 mb-12 animate-fade-in-up">
          My Training Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => {
            const isActive = activeImageIndex === index;
            return (
              <div
                key={index}
                className={`
                  overflow-hidden rounded-xl shadow-lg transform
                  transition-all duration-500
                  ${isActive ? "scale-105" : "scale-100"}
                `}
              >
                <img
                  src={src}
                  alt={`Trainer Image ${index + 1}`}
                  className={`
                    w-full h-[300px] object-cover
                    transition-all duration-300
                    ${isActive ? "brightness-110" : "brightness-100"}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainerGallery;
