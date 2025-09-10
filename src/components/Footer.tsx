import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Nad pharmadic</h2>
          <p className="mt-4 text-gray-400">
            Building modern solutions for businesses worldwide.  
            Grow with innovation, trust, and technology.
          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <a href="#" className="hover:text-indigo-400">Home</a>
          <a href="#" className="hover:text-indigo-400">About</a>
          <a href="#" className="hover:text-indigo-400">Services</a>
          <a href="#" className="hover:text-indigo-400">Contact</a>
        </div>

        {/* Right - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400"><Facebook /></a>
            <a href="#" className="hover:text-indigo-400"><Twitter /></a>
            <a href="#" className="hover:text-indigo-400"><Linkedin /></a>
            <a href="#" className="hover:text-indigo-400"><Instagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div id="footer" className="mt-12 border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
