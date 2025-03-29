import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingBag, FaArrowLeft, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { clearCart } from '../redux/cartSlice';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [orderComplete, setOrderComplete] = useState(false);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.zip) newErrors.zip = 'ZIP code is required';
    }

    if (step === 2 && paymentMethod === 'credit') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiry) newErrors.expiry = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitOrder = () => {
    if (validateStep(activeStep)) {
      // In a real app, you would process payment here
      console.log('Order submitted:', { 
        customer: formData, 
        items, 
        paymentMethod, 
        total 
      });
      
      // Simulate payment processing
      setTimeout(() => {
        setOrderComplete(true);
        dispatch(clearCart());
      }, 2000);
    }
  };

  // Animation variants
  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
          <p className="text-gray-500 mb-8">Order #: {Math.floor(Math.random() * 1000000)}</p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-medium text-gray-700 mb-4">Order Summary</h3>
            {items.map(item => (
              <div key={`${item.id}-${item.size}`} className="flex justify-between py-2 border-b border-gray-100">
                <span>{item.name} ({item.size}) × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-medium text-gray-800 mt-4 pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <FaShoppingBag className="text-2xl text-purple-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Progress Steps */}
              <div className="flex border-b border-gray-200">
                <button 
                  onClick={() => setActiveStep(1)}
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeStep === 1 ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
                >
                  Shipping
                </button>
                <button 
                  onClick={() => activeStep > 1 && setActiveStep(2)}
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeStep === 2 ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
                  disabled={activeStep < 2}
                >
                  Payment
                </button>
                <button 
                  onClick={() => activeStep > 2 && setActiveStep(3)}
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeStep === 3 ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
                  disabled={activeStep < 3}
                >
                  Review
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Shipping Information */}
                  {activeStep === 1 && (
                    <motion.div
                      key="step1"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={stepVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-bold text-gray-800 mb-6">Shipping Information</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                        />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg border ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                          />
                          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                          <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 rounded-lg border ${errors.zip ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                          />
                          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Payment Method */}
                  {activeStep === 2 && (
                    <motion.div
                      key="step2"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={stepVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Method</h2>
                      <div className="space-y-4 mb-8">
                        <div 
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'credit' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-300'}`}
                          onClick={() => setPaymentMethod('credit')}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${paymentMethod === 'credit' ? 'border-purple-500 bg-purple-500' : 'border-gray-400'}`}>
                              {paymentMethod === 'credit' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>
                            <span className="font-medium">Credit/Debit Card</span>
                            <div className="ml-auto flex space-x-2">
                              <FaCcVisa className="text-2xl text-blue-900" />
                              <FaCcMastercard className="text-2xl text-red-500" />
                            </div>
                          </div>
                          
                          {paymentMethod === 'credit' && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 space-y-4"
                            >
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                <input
                                  type="text"
                                  name="cardNumber"
                                  value={formData.cardNumber}
                                  onChange={handleChange}
                                  placeholder="1234 5678 9012 3456"
                                  className={`w-full px-4 py-2 rounded-lg border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                />
                                {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                  <input
                                    type="text"
                                    name="expiry"
                                    value={formData.expiry}
                                    onChange={handleChange}
                                    placeholder="MM/YY"
                                    className={`w-full px-4 py-2 rounded-lg border ${errors.expiry ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                  />
                                  {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                  <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    placeholder="123"
                                    className={`w-full px-4 py-2 rounded-lg border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                                  />
                                  {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>

                        <div 
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-300'}`}
                          onClick={() => setPaymentMethod('paypal')}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-purple-500 bg-purple-500' : 'border-gray-400'}`}>
                              {paymentMethod === 'paypal' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>
                            <span className="font-medium">PayPal</span>
                            <FaCcPaypal className="text-2xl text-blue-700 ml-auto" />
                          </div>
                        </div>

                        <div 
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'apple' ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-300'}`}
                          onClick={() => setPaymentMethod('apple')}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${paymentMethod === 'apple' ? 'border-purple-500 bg-purple-500' : 'border-gray-400'}`}>
                              {paymentMethod === 'apple' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>
                            <span className="font-medium">Apple Pay</span>
                            <FaCcApplePay className="text-2xl text-black ml-auto" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Order Review */}
                  {activeStep === 3 && (
                    <motion.div
                      key="step3"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={stepVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-bold text-gray-800 mb-6">Review Your Order</h2>
                      
                      <div className="mb-8">
                        <h3 className="font-medium text-gray-700 mb-3">Shipping Information</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p>{formData.firstName} {formData.lastName}</p>
                          <p>{formData.address}</p>
                          <p>{formData.city}, {formData.zip}</p>
                          <p className="mt-2">{formData.email}</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="font-medium text-gray-700 mb-3">Payment Method</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                          {paymentMethod === 'credit' && (
                            <>
                              <p>Credit/Debit Card</p>
                              <p className="text-sm text-gray-500 mt-1">•••• •••• •••• {formData.cardNumber?.slice(-4)}</p>
                            </>
                          )}
                          {paymentMethod === 'paypal' && <p>PayPal</p>}
                          {paymentMethod === 'apple' && <p>Apple Pay</p>}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">Order Summary</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                          {items.map(item => (
                            <div key={`${item.id}-${item.size}`} className="flex justify-between py-3 border-b border-gray-200">
                              <div>
                                <p>{item.name} ({item.size})</p>
                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                              </div>
                              <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          ))}
                          <div className="space-y-2 pt-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Subtotal</span>
                              <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Shipping</span>
                              <span>${shipping.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Tax</span>
                              <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-medium text-lg pt-2 mt-2 border-t border-gray-200">
                              <span>Total</span>
                              <span>${total.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {activeStep > 1 ? (
                    <button
                      onClick={handlePreviousStep}
                      className="flex items-center text-purple-600 hover:text-purple-800 font-medium"
                    >
                      <FaArrowLeft className="mr-2" /> Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {activeStep < 3 ? (
                    <button
                      onClick={handleNextStep}
                      className="py-2 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Continue to {activeStep === 1 ? 'Payment' : 'Review'}
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitOrder}
                      className="py-2 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300"
                    >
                      Place Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={`${item.id}-${item.size}`} className="flex items-start">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.size} × {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 mt-6 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 mt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;