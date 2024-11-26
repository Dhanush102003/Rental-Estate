import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <motion.h1 
              className="text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Find Your Dream Property
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover the perfect home with our AI-powered real estate platform.
              Smart search, instant analytics, and seamless transactions.
            </motion.p>
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: MapPin,
                title: "Smart Location",
                description: "Find properties in prime locations with our advanced location intelligence."
              },
              {
                icon: Building2,
                title: "AI-Powered Search",
                description: "Let our AI find the perfect property match based on your preferences."
              },
              {
                icon: TrendingUp,
                title: "Market Analysis",
                description: "Get real-time market insights and property valuations."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link 
                  to="/real-estate" 
                  className="text-primary-500 font-medium flex items-center hover:text-primary-600"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties across prime locations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
                title: "Modern Villa",
                location: "Pondicherry",
                price: "₹2,500,000"
              },
              {
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
                title: "Luxury Apartment",
                location: "Kerala",
                price: "₹1,800,000"
              },
              {
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
                title: "Beach House",
                location: "Goa",
                price: "₹3,200,000"
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {property.location}
                    </p>
                    <p className="text-xl font-bold mt-2">{property.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;