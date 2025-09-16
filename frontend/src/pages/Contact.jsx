import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="px-6 md:px-16 py-12">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold text-gray-700 mb-10">
        Contact Us
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Contact Image */}
        <img
          className="w-full md:max-w-[320px] rounded-lg shadow-sm"
          src={assets.contact_image}
          alt="Contact"
        />

        {/* Contact Details */}
        <div className="flex flex-col gap-4 text-gray-600 text-sm">
          <p>
            <span className="font-medium">Hospital:</span> Patil Hospital
          </p>
          <p>
            <span className="font-medium">Address:</span> Surat, Gujarat,
            India
          </p>
          <p>
            <span className="font-medium">Phone:</span> +91 ***** *****
          </p>
          <p>
            <span className="font-medium">Email:</span> info@patilhospital.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
