import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartOverlay from "./components/CartOverlay";
import CategoryPage from "./pages/CategoryPage";
import Shop from './pages/Shop';
import ProductDetails from "./pages/ProductDetails";
import Footer from "./pages/Footer";
import AboutPage from "./pages/About";
import CheckoutPage from "./pages/Checkout";



const App = () => {
  return (
    
    <Router>
      <Navbar />
      <CartOverlay />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Home Page Route */}
        <Route path="/cart" element={<CartOverlay isOpen={true} />} /> {/* ✅ Cart Page */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

      </Routes>
      <Footer />
    </Router>
  
  );
};

export default App;
