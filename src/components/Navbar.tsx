import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            <img src={logo} alt="Logo" className="w-28 h-10" />
          </div>

          {/* Desktop Menu (Centered) */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <a href="#hero" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#content" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#investors" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#footer" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none !bg-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#hero" className="block text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#content" className="block text-gray-700 hover:text-indigo-600">About</a>
            <a href="#investors" className="block text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#footer" className="block text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
