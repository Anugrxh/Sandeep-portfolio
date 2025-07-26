import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-gray-500 text-sm">
      <p>
        © {new Date().getFullYear()} Sandeep Balakrishnan Fitness. All rights
        reserved.
      </p>
      <p>Developed By Anugrah M V</p>
    </footer>
  );
};

export default Footer;