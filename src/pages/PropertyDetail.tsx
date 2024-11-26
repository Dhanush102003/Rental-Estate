import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Home, User, Phone, Mail, Download, CreditCard } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { jsPDF } from 'jspdf';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Modern Apartment",
    location: "Chennai",
    price: "₹45,00,000",
    sqft: "1,200",
    owner: "John Doe",
    description: "Luxurious modern apartment with state-of-the-art amenities and beautiful city views."
  },
  // ... other properties
];

const PropertyDetail = () => {
  const { id } = useParams();
  const [showPayment, setShowPayment] = useState(false);
  const { register, handleSubmit } = useForm();

  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  const onSubmit = (data: any) => {
    // Handle form submission
    console.log(data);
    setShowPayment(true);
  };

  const downloadDocument = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Property Details', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Property: ${property.title}`, 20, 40);
    doc.text(`Location: ${property.location}`, 20, 50);
    doc.text(`Price: ${property.price}`, 20, 60);
    doc.text(`Area: ${property.sqft} sq.ft`, 20, 70);
    doc.text(`Owner: ${property.owner}`, 20, 80);
    
    doc.save('property-details.pdf');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {property.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Home className="h-5 w-5 mr-2" />
                  {property.sqft} sq.ft
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-2" />
                  {property.owner}
                </div>
                <div className="text-2xl font-bold text-primary-600">
                  {property.price}
                </div>
              </div>

              <p className="text-gray-600 mb-6">{property.description}</p>

              <div className="space-x-4">
                <button
                  onClick={downloadDocument}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Details
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 border-t">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  {...register('name', { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
                <input
                  {...register('contact', { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  {...register('email', { required: true })}
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  {...register('address', { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>

          {showPayment && (
            <div className="p-6 border-t">
              <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  Credit Card
                </button>
                <button className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  UPI
                </button>
                <button className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                  Net Banking
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyDetail;