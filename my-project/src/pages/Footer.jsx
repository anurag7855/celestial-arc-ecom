import React from "react";
import { FaInstagram, FaTwitter, FaPinterest, FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a0a0a] text-amber-50 pt-20 pb-12 px-6 md:px-12 lg:px-24 border-t border-burgundy-900">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 max-w-7xl mx-auto">
        {/* Brand Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
            CHATEAU NOIR
          </h3>
          <p className="text-amber-100/70 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Established 1892. Crafting timeless menswear with uncompromising quality for the discerning gentleman.
          </p>
          <div className="flex space-x-6 pt-2">
            <a href="#" className="text-amber-100/50 hover:text-amber-50 transition-colors duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-amber-100/50 hover:text-amber-50 transition-colors duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-amber-100/50 hover:text-amber-50 transition-colors duration-300">
              <FaPinterest size={18} />
            </a>
            <a href="#" className="text-amber-100/50 hover:text-amber-50 transition-colors duration-300">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium mb-6 uppercase tracking-wider text-amber-50" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.15em' }}>
            Collections
          </h4>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Bespoke Tailoring
              </Link>
            </li>
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Evening Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Leather Goods
              </Link>
            </li>
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Cashmere Knits
              </Link>
            </li>
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Limited Editions
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-medium mb-6 uppercase tracking-wider text-amber-50" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.15em' }}>
            Atelier Services
          </h4>
          <ul className="space-y-3">
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Private Fittings
              </Link>
            </li>
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Alterations
              </Link>
            </li>
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Fabric Library
              </Link>
            </li>
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Style Consultations
              </Link>
            </li>
            <li>
              <Link to="#" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300 block py-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Worldwide Delivery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-medium mb-6 uppercase tracking-wider text-amber-50" style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.15em' }}>
            Contact
          </h4>
          <div className="space-y-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <div className="flex items-start space-x-3">
              <IoMdMail className="mt-1 text-amber-100/50" />
              <a href="mailto:concierge@chateau-noir.com" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300">
                concierge@chateau-noir.com
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <BsTelephone className="mt-1 text-amber-100/50" />
              <a href="tel:+442071234567" className="text-amber-100/70 hover:text-amber-50 transition-colors duration-300">
                +44 (0)20 7123 4567
              </a>
            </div>
            <p className="text-amber-100/70 pt-2 leading-relaxed">
              14 Savile Row<br />
              Mayfair, London<br />
              W1S 3JN
            </p>
            <p className="text-amber-100/50 text-sm italic mt-4">
              By appointment only
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mb-16 border-t border-amber-900/30 pt-16 max-w-5xl mx-auto">
        <div className="text-center">
          <h4 className="text-2xl font-serif mb-4 text-amber-50" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Chateau Noir Journal
          </h4>
          <p className="text-amber-100/70 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Subscribe to receive our seasonal lookbooks, exclusive invitations, and heritage insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 bg-amber-900/10 border border-amber-900/30 rounded-none focus:outline-none focus:border-amber-50 text-amber-50 placeholder-amber-100/50"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            />
            <button 
              className="px-6 py-3 bg-amber-900/90 text-amber-50 font-medium rounded-none hover:bg-amber-800 transition-colors duration-300 uppercase tracking-wider text-sm border border-amber-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-amber-900/30 pt-8 text-center text-amber-100/50 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        <p>© {new Date().getFullYear()} CHATEAU NOIR. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link to="#" className="hover:text-amber-50 transition-colors duration-300">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-amber-50 transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-amber-50 transition-colors duration-300">
            Legal
          </Link>
        </div>
        <p className="mt-4 text-xs text-amber-900/70">
          Registered in England No. 12345678 | VAT No. GB 123 4567 89
        </p>
      </div>
    </footer>
  );
};

export default Footer;