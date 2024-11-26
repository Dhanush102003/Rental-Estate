import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold">SmartEstate</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property with AI-powered solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/real-estate" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/rental-ai" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Rental AI
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                Coimbatore, India
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-primary-500" />
                +1 234 567 890
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-primary-500" />
                GenAI@smartestate.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SmartEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;