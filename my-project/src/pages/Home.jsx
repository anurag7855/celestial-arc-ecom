import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import { FaArrowRight, FaStar } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Tailored Suits", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80", color: "from-gray-800/20 to-gray-900/20" },
    { name: "Cashmere Knits", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80", color: "from-amber-800/20 to-amber-900/20" },
    { name: "Leather Jackets", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", color: "from-brown-800/20 to-brown-900/20" },
    { name: "Silk Shirts", image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80", color: "from-ivory-800/20 to-ivory-900/20" },
    { name: "Wool Overcoats", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", color: "from-gray-700/20 to-gray-800/20" },
    { name: "Italian Loafers", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80", color: "from-burgundy-800/20 to-burgundy-900/20" },
    { name: "Limited Editions", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", color: "from-gold-800/20 to-gold-900/20" },
    { name: "Timepieces", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80", color: "from-silver-800/20 to-silver-900/20" },
  ];

  const sliderContent = [
    {
      image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Savile Row Heritage",
      subtitle: "Bespoke tailoring since 1892",
      buttonText: "Discover Tailoring"
    },
    {
      image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Autumn Collection",
      subtitle: "Wool, cashmere and fine leathers",
      buttonText: "View Collection"
    },
    {
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      title: "Evening Wear",
      subtitle: "Black tie essentials for the modern gentleman",
      buttonText: "Explore Formal"
    }
  ];

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Luxury Hero Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade, Parallax]}
        effect="fade"
        speed={1000}
        parallax={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-screen"
      >
        {sliderContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image with Subtle Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                data-swiper-parallax="-30%"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
              </div>
              
              {/* Content with Parallax Effect */}
              <div className="relative h-full flex flex-col justify-center items-start text-left px-12 lg:px-24">
                <div className="max-w-2xl">
                  <h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight leading-tight"
                    data-swiper-parallax="-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <span className="text-white">
                      {slide.title}
                    </span>
                  </h1>
                  <p 
                    className="text-lg md:text-xl font-light mb-8 text-gray-300"
                    data-swiper-parallax="-200"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {slide.subtitle}
                  </p>
                  <button
                    className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-none font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 group uppercase tracking-wider text-sm"
                    onClick={() => navigate("/shop")}
                    data-swiper-parallax="-100"
                  >
                    {slide.buttonText}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
              
              {/* Carousel Number Indicator */}
              <div className="absolute bottom-8 right-8 text-white text-sm z-10">
                <span className="font-medium">0{index + 1}</span>
                <span className="mx-1">/</span>
                <span className="text-gray-400">0{sliderContent.length}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Heritage Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Tailoring workshop"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="border-b-2 border-gray-900 pb-2">Established 1892</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                For over a century, our atelier has crafted garments of uncompromising quality. Each piece is constructed using traditional techniques passed down through generations of master tailors.
              </p>
              <button
                className="px-8 py-3 bg-gray-900 text-white rounded-none font-medium hover:bg-gray-800 transition-all duration-300 uppercase tracking-wider text-sm"
                onClick={() => navigate("/about")}
              >
                Our Heritage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="border-b-2 border-gray-900 pb-2">The Collections</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Timeless pieces crafted from the world's finest materials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`relative h-96 rounded-none overflow-hidden group cursor-pointer bg-gradient-to-br ${category.color}`}
                onClick={() => navigate(`/category/${category.name.toLowerCase().replace(' ', '-')}`)}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent">
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:-translate-y-2 transition-transform duration-500 uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400" />
                  </div>
                  <button className="mt-4 px-4 py-2 bg-white text-gray-900 text-xs font-medium rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-wider">
                    View Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Section */}
      <section className="py-32 bg-[url('https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bespoke Tailoring Service
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Experience the art of true bespoke tailoring. Our master tailors will guide you through every detail, from fabric selection to the final fitting, creating a garment that is uniquely yours.
          </p>
          <button
            className="px-8 py-3 border-2 border-white text-white rounded-none font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase tracking-wider text-sm"
            onClick={() => navigate("/bespoke")}
          >
            Begin Your Commission
          </button>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="border-b-2 border-gray-900 pb-2">Autumn Winter</span> 2023
              </h2>
              <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Our latest collection draws inspiration from the grand tours of Europe, featuring rich wools, supple leathers, and luxurious cashmeres in a palette of earthy tones and deep burgundies.
              </p>
              <button
                className="px-8 py-3 bg-gray-900 text-white rounded-none font-medium hover:bg-gray-800 transition-all duration-300 uppercase tracking-wider text-sm"
                onClick={() => navigate("/collection/autumn-winter-2023")}
              >
                View Lookbook
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-96 rounded-none overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                  alt="Autumn Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-white font-medium uppercase tracking-wider text-sm">Evening Wear</h3>
                </div>
              </div>
              <div className="relative h-96 rounded-none overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                  alt="Winter Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-white font-medium uppercase tracking-wider text-sm">Outerwear</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;