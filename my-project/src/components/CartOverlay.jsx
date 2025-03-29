import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart, removeItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartOverlay = ({ isOpen, onClose, darkMode }) => {
  const { items = [] } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Safe total calculation with proper price parsing
  const subtotal = items.reduce((total, item) => {
    const price = Number(item.price.replace(/[^0-9.-]+/g, "")) || 0;
    return total + (price * item.quantity);
  }, 0);

  const handleCheckout = () => {
    onClose(); // Close the cart overlay
    navigate('/checkout'); // Navigate to checkout page
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className={`absolute right-0 top-0 h-full w-full max-w-md shadow-xl ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className={`text-xl font-bold flex items-center gap-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <ShoppingBag /> Your Cart
                </h2>
                <button 
                  onClick={onClose}
                  className={`p-1 rounded-full ${
                    darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                  aria-label="Close cart"
                >
                  <X size={24} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    Your cart is empty
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto">
                    {items.map((item) => (
                      <div 
                        key={`${item.id}-${item.size}`} 
                        className={`flex gap-4 py-4 ${
                          darkMode ? 'border-gray-800' : 'border-gray-200'
                        } border-b`}
                      >
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className={`font-medium ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.name}
                          </h3>
                          <p className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            Size: {item.size}
                          </p>
                          <p className="text-purple-500">
                            {item.price} × {item.quantity}
                          </p>
                        </div>
                        <button 
                          onClick={() => dispatch(removeItem(item.id))}
                          className={`${
                            darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'
                          }`}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className={`pt-4 ${
                    darkMode ? 'border-gray-800' : 'border-gray-200'
                  } border-t`}>
                    <div className={`flex justify-between mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={handleCheckout}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
                      aria-label="Proceed to checkout"
                      disabled={items.length === 0}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartOverlay;