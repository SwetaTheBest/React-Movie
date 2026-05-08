import React, { useState, useCallback } from "react";
import debounce from "../utils/debounce";

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useCallback(
    debounce((val) => onSearch(val), 300),
    [],
  );

  const handleSearch = (e) => {
    e.preventDefault();
    debouncedSearch(searchQuery);
  };

  return (
    <div className="w-flex max-w-md mx-auto">
      <div className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-md">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          🔍 Search Movies
        </h3>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                debouncedSearch(e.target.value);
              }}
              className="w-40 px-5 py-3 bg-gray-50 border-2 border-gray-300 focus:border-purple-600 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all duration-200"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">🎬</span>
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
