import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center bg-transparent">
      {/* Dumbbell SVG icon with a spinning animation */}
      <svg
        className="animate-spin h-20 w-20 text-lime-500" // Tailwind's animate-spin for rotation
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Path for a more distinct dumbbell shape */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6h4v12h-4zM6 9h-2v6h2c0 1.105.895 2 2 2h0c1.105 0 2-.895 2-2V9c0-1.105-.895-2-2-2h0c-1.105 0-2 .895-2 2zm12 0h2v6h-2c0 1.105-.895 2-2 2h0c-1.105 0-2-.895-2-2V9c0-1.105.895-2 2-2h0c1.105 0 2 .895 2 2z"
        />
      </svg>
    </div>
  );
};

export default Loader;
