import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar, FaShoppingBag, FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

// Global Product Data - Updated for Mafia Brand
const productsData = [
  { 
    id: "1", 
    name: "Don's Silk Shirt", 
    category: "Shirts", 
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80", 
    price: "$249.99", 
    description: "Handcrafted silk shirt with mother-of-pearl buttons and hidden pocket.", 
    rating: 4.8 
  },
  { 
    id: "2", 
    name: "Capo Wool Suit", 
    category: "Suits", 
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
    price: "$899.99", 
    description: "Bespoke Italian wool suit with reinforced shoulders and custom lining.", 
    rating: 5.0 
  },
  { 
    id: "3", 
    name: "Consigliere Overcoat", 
    category: "Outerwear", 
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
    price: "$599.99", 
    description: "Cashmere-blend overcoat with bullet-resistant lining (optional).", 
    rating: 4.9 
  },
  { 
    id: "4", 
    name: "Made Leather Gloves", 
    category: "Accessories", 
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", 
    price: "$199.99", 
    description: "Butter-soft Italian leather gloves with reinforced knuckles.", 
    rating: 4.7 
  },
  { 
    id: "5", 
    name: "Omertà Tuxedo", 
    category: "Formal", 
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80", 
    price: "$1,299.99", 
    description: "Peak lapel tuxedo with satin trim and hidden compartments.", 
    rating: 5.0 
  },
  { 
    id: "6", 
    name: "Cosa Nostra Loafers", 
    category: "Footwear", 
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80", 
    price: "$349.99", 
    description: "Hand-stitched Venetian loafers with non-slip soles.", 
    rating: 4.6 
  },
  { 
    id: "7", 
    name: "Family Ring", 
    category: "Jewelry", 
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80", 
    price: "$1,999.99", 
    description: "24k gold signet ring with custom family crest engraving.", 
    rating: 4.9 
  },
  { 
    id: "8", 
    name: "Silk Pocket Square Set", 
    category: "Accessories", 
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80", 
    price: "$129.99", 
    description: "Set of seven hand-rolled silk pocket squares for every occasion.", 
    rating: 4.5 
  },
];

// Categorizing products
const signaturePieces = productsData.slice(0, 4);
const formalCollection = productsData.slice(3, 7);
const accessories = productsData.filter(p => p.category === "Accessories" || p.category === "Jewelry");

const Shop = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0a] text-amber-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-start bg-[url('https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="relative z-10 text-left px-12 lg:px-24 max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight" style={{ fontFamily: "'Cinzel', serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
              THE FAMILY
            </span>
          </h1>
          <p className="text-xl text-amber-100/80 mb-8 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Bespoke tailoring and undisputed quality since 1920. Clothing for those who understand the meaning of respect.
          </p>
          <button 
            className="px-8 py-4 bg-transparent border-2 border-amber-500 text-amber-50 rounded-none font-medium hover:bg-amber-500/10 transition-all duration-300 uppercase tracking-wider flex items-center gap-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            onClick={() => navigate("/collection")}
          >
            Enter the Family <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Shop Content */}
      <div className="py-24 px-6 md:px-12 lg:px-24">
        <Section 
          title={
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-amber-600"></span>
              <span className="text-3xl font-serif uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>Signature Pieces</span>
              <span className="h-px w-16 bg-amber-600"></span>
            </div>
          } 
          products={signaturePieces} 
          navigate={navigate} 
        />
        
        <Section 
          title={
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-amber-600"></span>
              <span className="text-3xl font-serif uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>Formal Attire</span>
              <span className="h-px w-16 bg-amber-600"></span>
            </div>
          } 
          products={formalCollection} 
          navigate={navigate} 
        />
        
        <Section 
          title={
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-amber-600"></span>
              <span className="text-3xl font-serif uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>Finishing Touches</span>
              <span className="h-px w-16 bg-amber-600"></span>
            </div>
          } 
          products={accessories} 
          navigate={navigate} 
        />
      </div>

      {/* CTA Section */}
      <div className="relative py-32 px-6 text-center bg-[url('https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
              BESPOKE COMMISSIONS
            </span>
          </h2>
          <p className="text-xl text-amber-100/80 mb-12 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            For our most discerning clients, we offer completely custom tailoring services with premium fabrics and discrete fittings.
          </p>
          <button 
            className="px-8 py-4 border-2 border-amber-500 text-amber-50 rounded-none font-medium hover:bg-amber-500/10 transition-all duration-300 uppercase tracking-wider flex items-center gap-2 mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            onClick={() => navigate("/bespoke")}
          >
            Request Consultation <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Section Component with Mafia Vibe
const Section = ({ title, products, navigate }) => (
  <div className="mb-32">
    <div className="text-center mb-16">
      {title}
      <p className="text-amber-600/80 uppercase tracking-widest text-sm mt-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        For Members Only
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <p className="text-amber-100/70 text-sm mb-6 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {product.description}
            </p>
            <button className="w-full py-3 bg-amber-600 text-black rounded-none font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm border border-amber-600 hover:bg-amber-700 hover:border-amber-700">
              <FaShoppingBag /> Acquire
            </button>
          </div>
          
          {/* Quick View Button */}
          <div className="absolute top-4 right-4">
            <button 
              className="p-2 bg-black/80 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-amber-600/50 hover:bg-amber-600/20"
              onClick={(e) => {
                e.stopPropagation();
                // Implement quick view functionality
              }}
            >
              <FaSearch className="text-amber-100" size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export { productsData };
export default Shop;