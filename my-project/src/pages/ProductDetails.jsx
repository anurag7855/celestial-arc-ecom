import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from './Shop';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { FaShoppingBag, FaHeart, FaShare, FaStar, FaRegStar } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { BsPatchCheckFill } from 'react-icons/bs';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((item) => item.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();

  // Sample gallery images
  const galleryImages = [
    product?.image,
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
    "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400" />
        )
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size first');
      return;
    }

    dispatch(
      addToCart({
        ...product,
        quantity,
        size: selectedSize,
      })
    );
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size first');
      return;
    }

    dispatch(
      addToCart({
        ...product,
        quantity,
        size: selectedSize,
      })
    );

    navigate('/checkout');
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-red-400 p-8 bg-gray-900/80 rounded-xl">
          ⚠️ Product Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:flex md:gap-12">
        {/* Product Images */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl border border-gray-800"
          >
            <img 
              src={galleryImages[currentImage]} 
              alt={product.name} 
              className="w-full h-auto object-cover aspect-square"
            />
          </motion.div>
          
          <div className="flex gap-4 mt-4">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImage === index ? 'border-purple-500' : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <img src={img} alt={`${product.name} thumbnail ${index}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="mb-4">
              <span className="text-sm text-purple-400 font-medium">{product.category}</span>
              <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
              
              <div className="flex items-center mt-3">
                <div className="flex mr-4">
                  {renderStars(product.rating || 4)}
                </div>
                <span className="text-gray-400 text-sm">(128 reviews)</span>
                <span className="mx-4 text-gray-600">|</span>
                <span className="text-green-400 flex items-center">
                  <BsPatchCheckFill className="mr-1" /> In Stock
                </span>
              </div>
            </div>

            <p className="text-3xl font-bold text-purple-400 mb-4">${product.price}</p>
            <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

            {/* Size Selector */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Select Size</h3>
              <div className="flex gap-3">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <motion.button
                    key={size}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all ${
                      selectedSize === size 
                        ? 'border-purple-500 bg-purple-500/10' 
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </motion.button>
                <span className="text-xl w-10 text-center">{quantity}</span>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
                onClick={handleAddToCart}
              >
                <FaShoppingBag /> Add to Cart
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
                onClick={handleBuyNow}
              >
                Buy Now <IoIosArrowRoundForward size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <FaHeart className={isWishlisted ? "text-red-500" : "text-gray-400"} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaShare className="text-gray-400" />
              </motion.button>
            </div>

            {/* Product Meta */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <span className="block font-medium text-gray-300">SKU</span>
                  <span>CA-{product.id.padStart(4, '0')}</span>
                </div>
                <div>
                  <span className="block font-medium text-gray-300">Category</span>
                  <span>{product.category}</span>
                </div>
                <div>
                  <span className="block font-medium text-gray-300">Materials</span>
                  <span>Organic Cotton, Recycled Polyester</span>
                </div>
                <div>
                  <span className="block font-medium text-gray-300">Shipping</span>
                  <span>Free worldwide shipping</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring' }}
            className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <BsPatchCheckFill size={20} />
            <span>Added to cart successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;