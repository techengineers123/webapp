import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
        Get in touch with us for any inquiries or support. We’re here to help!
      </p>

      <div className="flex flex-col lg:flex-row items-start w-full lg:space-x-8">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mb-8 lg:mb-0 lg:w-1/2">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9832112029094!2d-122.085749684689!3d37.42199957982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba046f3c7981%3A0x254dd111b310d26a!2sGoogleplex!5e0!3m2!1sen!2sus!4v1631010935174!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
