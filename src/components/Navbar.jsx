import { useState } from "react";
import "../iconLibrary";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">Ultimate SLP</a>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="/features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>
          <a href="/pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </a>
          <a href="/about" className="text-gray-600 hover:text-blue-600">
            About Us
          </a>
        </nav>

        {/* Call-to-Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="space-y-2 text-center py-4">
            <a
              href="/"
              className="block text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/features"
              className="block text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="/pricing"
              className="block text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/about"
              className="block text-gray-600 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/login"
              className="block text-blue-600 border border-blue-600 rounded-md mx-auto px-4 py-2 w-24 hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="/signup"
              className="block text-white bg-blue-600 rounded-md mx-auto px-4 py-2 w-24 hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
