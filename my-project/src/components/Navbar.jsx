import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaUser, FaMoon, FaSun } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import UserModal from "./UserModal";
import CartOverlay from "./CartOverlay";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Improved cart implementation
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartItemsCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", subItems: ["New Arrivals", "Bestsellers", "Collections"] },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  // Enhanced cart toggle function
  const handleCartToggle = () => {
    console.log("Cart button clicked - Current state:", cartOpen);
    setCartOpen(prev => !prev);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-800 text-white text-center py-2 px-4 text-sm">
        ✨ Free shipping on orders over $50 | Use code <span className="font-bold">STELLAR20</span> for 20% off ✨
      </div>

      <nav className={`${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg py-4 px-6 md:px-12 sticky top-0 z-50 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className={`text-2xl font-serif font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-purple-400 transition-colors duration-300`}>
              Celestial<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Arc</span>
            </span>
            <span className="ml-1 text-xs bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text font-light">STUDIO</span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link 
                  to={item.path} 
                  className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium transition-colors duration-200`}
                >
                  {item.name}
                  {item.subItems && <IoIosArrowDown className="ml-1 text-xs" />}
                </Link>
                
                {/* Animated underline */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-300 transition-all duration-300 ${hoveredItem === item.name ? 'w-full' : 'w-0'}`}></div>

                {/* Dropdown for Shop */}
                {item.subItems && hoveredItem === item.name && (
                  <div className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} py-2 z-50 animate-fadeIn`}>
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem} 
                        to={`/shop/${subItem.toLowerCase().replace(' ', '-')}`}
                        className={`block px-4 py-2 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} transition-colors duration-200`}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'} hover:opacity-80 transition-all duration-300`}
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            
            <SearchBar darkMode={darkMode} />
            
            {/* Enhanced Cart Icon */}
            <div className="relative">
              <button 
                onClick={handleCartToggle}
                className={`p-2 rounded-full ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors duration-200 relative`}
                aria-label="Shopping Cart"
              >
                <FaShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-400 to-pink-300 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount > 9 ? '9+' : cartItemsCount}
                  </span>
                )}
              </button>
            </div>
            
            <UserModal darkMode={darkMode} />
          </div>
        </div>
      </nav>

      {/* Enhanced Cart Overlay */}
      <CartOverlay 
        isOpen={cartOpen} 
        onClose={() => {
          console.log("Closing cart");
          setCartOpen(false);
        }} 
        darkMode={darkMode}
      />
    </>
  );
};

export default Navbar;