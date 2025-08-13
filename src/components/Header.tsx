import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building, Camera, Mail, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/residences', label: 'Residences', icon: Building },
    { path: '/gallery', label: 'Gallery', icon: Camera },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-slate-800">Joy Home's</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/book-now"
              className="bg-amber-600 text-white px-6 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-amber-600 hover:bg-amber-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-amber-600 bg-amber-50'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            <Link
              to="/book-now"
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;