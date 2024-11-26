import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import About from './pages/About';
import RentalAI from './pages/RentalAI';
import Contact from './pages/Contact';
import Login from './pages/Login';
import PropertyDetail from './pages/PropertyDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/real-estate" element={<RealEstate />} />
                <Route path="/about" element={<About />} />
                <Route path="/rental-ai" element={<RentalAI />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;