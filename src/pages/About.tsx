import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Building2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">About SmartEstate</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Revolutionizing real estate with AI-powered solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best real estate experience through innovation and dedication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Reliability",
                description: "Building lasting relationships through transparency and integrity."
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your success and satisfaction are our top priorities."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering exceptional service and results consistently."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <value.icon className="h-12 w-12 text-primary-500 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Properties Listed" },
              { number: "500+", label: "Happy Clients" },
              { number: "50+", label: "Cities Covered" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;