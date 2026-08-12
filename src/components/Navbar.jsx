import React, { useState } from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePageChange = (page) => {
    scrollToTop();
    setCurrentPage(page);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { id: 'home', label: 'হোম' },
    { id: 'treatments', label: 'চিকিৎসা সেবা' },
    { id: 'doctors', label: 'ডাক্তার' },
    { id: 'appointment', label: 'সিরিয়াল বুকিং' },
    // { id: 'blog', label: 'ব্লগ' },
    { id: 'contact', label: 'যোগাযোগ' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handlePageChange('home')}
              className="focus:outline-none "
            >
              <img 
                src="/logo.jpg" 
                alt="ডাঃ মাহি ডেন্টাল অ্যান্ড ইমপ্ল্যান্ট সেন্টার" 
                className="h-12 w-auto hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg scale-105 shadow-blue-500/25'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:text-blue-700 hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+8801722273455"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              জরুরি: 01722273455
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-100 p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 transform ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg scale-105 shadow-blue-500/25'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:text-blue-700 hover:scale-105'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
