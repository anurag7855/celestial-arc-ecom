import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Celestial Arc
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-300">
            Where cosmic wonder meets earthly elegance
          </p>
        </div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaArrowRight className="rotate-90 text-xl text-pink-300" />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide">
              <span className="border-b-2 border-pink-400 pb-2">Our Cosmic</span> Origin
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2020 amidst a meteor shower, Celestial Arc began as a dream to blend celestial
              inspiration with sustainable fashion. Our founder, astronomer-turned-designer Nova Chen,
              envisioned clothing that captures the magic of the cosmos while honoring our planet.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Each collection is thoughtfully crafted during significant astronomical events—solstices,
              eclipses, and planetary alignments—infusing cosmic energy into every stitch.
            </p>
            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2">
              Meet Our Team <FaArrowRight />
            </button>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=1920')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">
            <span className="border-b-2 border-purple-400 pb-2">Stellar</span> Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cosmic Consciousness",
                desc: "Our designs reflect celestial patterns and interstellar beauty",
                icon: "✨"
              },
              {
                title: "Sustainable Orbit",
                desc: "100% eco-friendly materials with zero-waste production",
                icon: "🌍"
              },
              {
                title: "Timeless Constellations",
                desc: "Pieces designed to transcend seasonal trends",
                icon: "⏳"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-pink-400/30 transition-all duration-500">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden order-last lg:order-first">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide">
              <span className="border-b-2 border-purple-400 pb-2">Stellar</span> Craftsmanship
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every Celestial Arc garment is hand-finished by artisans who treat fabric like stardust.
              Our signature techniques include:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-pink-300 mt-1">✧</span>
                <span>Galactic dye methods using natural pigments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-300 mt-1">✧</span>
                <span>Constellation-inspired embroidery with recycled thread</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-300 mt-1">✧</span>
                <span>Zero-waste pattern cutting that honors every scrap</span>
              </li>
            </ul>
            <button className="mt-6 px-8 py-3 border border-pink-400 text-pink-300 rounded-full font-medium hover:bg-pink-400/10 transition-all duration-300 flex items-center gap-2">
              Visit Our Atelier <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Cosmic Promise */}
      <section className="py-24 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1920')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-gray-950/80"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Our <span className="text-pink-300">Cosmic Promise</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            "We pledge to create fashion that honors both the beauty of the universe and the
            responsibility we bear to protect it. Each collection brings us closer to our
            vision of harmony between celestial inspiration and earthly sustainability."
          </p>
          <p className="text-lg text-pink-200">— Nova Chen, Founder</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;