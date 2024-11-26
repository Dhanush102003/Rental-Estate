import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Building2, DollarSign, MapPin, Home, Bath, BedDouble } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    type: "apartment",
    location: "chennai",
    price: 25000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    description: "Luxurious apartment with modern amenities"
  },
  {
    id: 2,
    title: "Spacious Family Home",
    type: "house",
    location: "chennai",
    price: 35000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    description: "Perfect for families"
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    type: "apartment",
    location: "coimbatore",
    price: 15000,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 600,
    description: "Ideal for singles or couples"
  },
  {
    id: 4,
    title: "Luxury Villa",
    type: "villa",
    location: "chennai",
    price: 75000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3000,
    description: "Premium living experience"
  },
  {
    id: 5,
    title: "Downtown Apartment",
    type: "apartment",
    location: "coimbatore",
    price: 28000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    description: "Central location with great amenities"
  },
  {
    id: 6,
    title: "Garden House",
    type: "house",
    location: "chennai",
    price: 45000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    description: "Beautiful garden space"
  },
  {
    id: 7,
    title: "Modern Villa",
    type: "villa",
    location: "coimbatore",
    price: 65000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    description: "Contemporary design with pool"
  },
  {
    id: 8,
    title: "Budget Apartment",
    type: "apartment",
    location: "chennai",
    price: 18000,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 750,
    description: "Affordable living space"
  },
  {
    id: 9,
    title: "Luxury Penthouse",
    type: "apartment",
    location: "coimbatore",
    price: 85000,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2500,
    description: "Premium penthouse with city views"
  },
  {
    id: 10,
    title: "Family Villa",
    type: "villa",
    location: "chennai",
    price: 95000,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    description: "Spacious family villa with garden"
  }
];

const RentalAI = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [results, setResults] = useState<Property[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);

    try {
      // Simulate API call with filtering
      const filteredResults = mockProperties.filter(property => {
        const matchesLocation = !location || 
          property.location.toLowerCase().includes(location.toLowerCase());
        const matchesType = !propertyType || 
          property.type.toLowerCase() === propertyType.toLowerCase();
        const matchesPrice = !maxPrice || 
          property.price <= parseInt(maxPrice);
        
        return matchesLocation && matchesType && matchesPrice;
      });

      setTimeout(() => {
        setResults(filteredResults);
        setLoading(false);
      }, 1000); // Simulate network delay
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">AI-Powered Rental Search</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-12">
              Find your perfect rental property with our advanced AI technology
            </p>

            <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location (e.g., Chennai)"
                    className="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/70 px-4 py-2"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none text-white px-4 py-2 appearance-none"
                  >
                    <option value="" className="text-gray-900">Property Type</option>
                    <option value="apartment" className="text-gray-900">Apartment</option>
                    <option value="house" className="text-gray-900">House</option>
                    <option value="villa" className="text-gray-900">Villa</option>
                  </select>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-2">
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max Price (₹)"
                    className="w-full bg-transparent border-none focus:outline-none text-white placeholder-white/70 px-4 py-2"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-primary-600 px-6 py-2 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <span className="animate-spin">↻</span>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {searched && (
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold mb-8"
            >
              {results.length} Properties Found
            </motion.h2>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((property, index) => (
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
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full">
                    ₹{property.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 className="h-4 w-4 mr-1" />
                    {property.type}
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <BedDouble className="h-4 w-4 mr-1" />
                      {property.bedrooms} Beds
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.bathrooms} Baths
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Home className="h-4 w-4 mr-1" />
                      {property.sqft} sqft
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <button className="w-full bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {searched && results.length === 0 && !loading && (
            <div className="text-center text-gray-600 py-12">
              No properties found matching your criteria. Try adjusting your search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RentalAI;