import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-gray-200 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-white">SemSmashers</h1>
          <p className="mt-2 text-gray-300 max-w-sm">
            Empowering learners with high-quality resources. Connect, learn, and
            grow with us.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h2 className="font-semibold text-gray-100">Quick Links</h2>
          <div className="links flex space-x-4 mt-5">
            <a
              href="https://facebook.com"
              className="text-gray-300 hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.8 9.8V15h-2v-3h2v-2a3 3 0 0 1 3-3h3v3h-3v2h3l-.5 3h-2.5v6.8A10 10 0 0 0 22 12Z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="text-gray-300 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5h-4v-5a6 6 0 0 1 6-6Z" />
                <path d="M2 9h4v12H2V9Zm2-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black mt-6 pt-4 text-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} SemSmashers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
