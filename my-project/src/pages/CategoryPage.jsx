import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const productData = {
  suits: [
    { 
      id: "1", 
      name: "Don's Silk-Blend Suit", 
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
      price: "$1,299.99", 
      description: "Bespoke Italian silk-wool blend with reinforced shoulders and custom lining.",
      rating: 5.0
    },
    { 
      id: "2", 
      name: "Capo Three-Piece", 
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80", 
      price: "$1,499.99", 
      description: "Peak lapel tuxedo with satin trim and hidden compartments.",
      rating: 4.9
    }
  ],
  shirts: [
    { 
      id: "3", 
      name: "Made Silk Shirt", 
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80", 
      price: "$349.99", 
      description: "Handcrafted silk with mother-of-pearl buttons and hidden pocket.",
      rating: 4.8
    },
    { 
      id: "4", 
      name: "Omertà White Dress Shirt", 
      image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80", 
      price: "$299.99", 
      description: "200-thread count Egyptian cotton with French cuffs.",
      rating: 4.7
    }
  ],
  outerwear: [
    { 
      id: "5", 
      name: "Family Overcoat", 
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      price: "$899.99", 
      description: "Cashmere-blend with reinforced stitching and custom lining.",
      rating: 4.9
    },
    { 
      id: "6", 
      name: "Black Hand Leather Jacket", 
      image: "https://images.unsplash.com/photo-1556909114-44e1d3a9b588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
      price: "$1,199.99", 
      description: "Full-grain Italian leather with hand-tooled details.",
      rating: 5.0
    }
  ],
  accessories: [
    { 
      id: "7", 
      name: "Signet Ring", 
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80", 
      price: "$2,499.99", 
      description: "24k gold with custom family crest engraving.",
      rating: 4.9
    },
    { 
      id: "8", 
      name: "Silk Pocket Square Set", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
      price: "$249.99", 
      description: "Hand-rolled Italian silk in seven classic patterns.",
      rating: 4.6
    }
  ]
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const products = productData[category?.toLowerCase()] || [];

  return (
    <div className="bg-[#0a0a0a] text-amber-50 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Category Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="h-px w-16 bg-amber-600"></span>
          <h2 className="text-3xl font-serif uppercase tracking-widest text-center" style={{ fontFamily: "'Cinzel', serif" }}>
            {category.toUpperCase()}
          </h2>
          <span className="h-px w-16 bg-amber-600"></span>
        </div>
        
        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-[#111] cursor-pointer hover:-translate-y-2 transition-all duration-500 border border-gray-800 hover:border-amber-600/30"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Product Image */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 left-4 bg-amber-600/90 text-black px-3 py-1 text-sm font-medium uppercase tracking-wider">
                    {product.price}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 group-hover:text-amber-300 transition-colors duration-300 uppercase tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      i < Math.floor(product.rating) ? 
                      <FaStar key={i} className="text-amber-400 text-sm" /> : 
                      <FaRegStar key={i} className="text-amber-400 text-sm" />
                    ))}
                    <span className="text-amber-100/50 text-xs ml-2">({product.rating})</span>
                  </div>
                  <p className="text-amber-100/70 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg mt-6 text-amber-100/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            No products found in this collection.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;