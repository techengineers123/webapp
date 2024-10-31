import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-50 max-w-full">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg mx-4 sm:mx-8 md:mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-700">Contact Us</h2>
          <hr className="my-2 border-t-2 border-gray-200" />
        </div>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-lg text-gray-500" />
            <p>123 Anywhere St., Any City, ST 12345</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-lg text-gray-500" />
            <p>hello@reallygreatsite.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-lg text-gray-500" />
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
