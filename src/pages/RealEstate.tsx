import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Modern Apartment",
    location: "Chennai",
    price: "₹45,00,000",
    sqft: "1,200",
    owner: "Vetri"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    title: "Luxury Villa",
    location: "Coimbatore",
    price: "₹95,00,000",
    sqft: "2,500",
    owner: "Kabali"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    title: "Garden House",
    location: "Chennai",
    price: "₹75,00,000",
    sqft: "1,800",
    owner: "Muniyandi"
  },
];

const RealEstate = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');

  const filteredProperties = selectedLocation === 'all'
    ? properties
    : properties.filter(prop => prop.location.toLowerCase() === selectedLocation.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Available Properties</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedLocation('all')}
              className={`px-4 py-2 rounded-md ${
                selectedLocation === 'all' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-primary-50'
              }`}
            >
              All Locations
            </button>
            <button
              onClick={() => setSelectedLocation('chennai')}
              className={`px-4 py-2 rounded-md ${
                selectedLocation === 'chennai' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-primary-50'
              }`}
            >
              Chennai
            </button>
            <button
              onClick={() => setSelectedLocation('coimbatore')}
              className={`px-4 py-2 rounded-md ${
                selectedLocation === 'coimbatore' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-primary-50'
              }`}
            >
              Coimbatore
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Home className="h-4 w-4 mr-1" />
                  {property.sqft} sq.ft
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  {property.owner}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">{property.price}</span>
                  <Link
                    to={`/property/${property.id}`}
                    className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;