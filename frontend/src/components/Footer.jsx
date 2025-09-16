import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr] gap-10 my-10 mt-20 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-4 w-36" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Patil Hospital — dedicated to providing compassionate care,
            professional treatment, and trusted medical services for our
            patients and community.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-lg font-medium mb-3">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-98765-*****</li>
            <li>patilhospital@example.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div>
        <p className="py-4 text-sm text-center text-gray-500">
          © 2025 Patil Hospital — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
