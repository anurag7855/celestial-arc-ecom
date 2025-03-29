import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  // Toggle search bar
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search submit
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
      setShowSearch(false);
    }
  };

  return (
    <div ref={searchRef} className="relative flex items-center">
      {/* Search Icon */}
      <FaSearch
        className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer transition-all"
        onClick={toggleSearch}
      />

      {/* Search Input Field (Right Side) */}
      <div
        className={`absolute right-0 top-0 transform ${
          showSearch ? "w-40 opacity-100 scale-100" : "w-0 opacity-0 scale-0"
        } transition-all duration-300 overflow-hidden`}
      >
        <input
          type="text"
          className="py-1 px-3 text-sm bg-gray-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
