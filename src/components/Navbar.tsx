import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Building2, Info, Bot, Phone, LogIn, LogOut, User, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { cart } = useCart();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Real Estate', path: '/real-estate', icon: Building2 },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Rental AI', path: '/rental-ai', icon: Bot },
    { name: 'Contact Us', path: '/contact', icon: Phone },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Building2 className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-primary-600">SmartEstate</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Cart Icon */}
            <Link to="/cart" className="relative text-gray-700 hover:text-primary-600">
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600">
                  <User className="h-5 w-5" />
                  <span>{user?.name}</span>
                </button>
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                  <button
                    onClick={logout}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors flex items-center"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </div>
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <div className="flex items-center px-3 py-2 text-gray-700">
                  <User className="h-5 w-5 mr-2" />
                  {user?.name}
                </div>
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-primary-600 w-full"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <LogIn className="h-5 w-5 mr-2" />
                  Login
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;