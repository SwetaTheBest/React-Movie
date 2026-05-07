import React, { useState, useCallback } from "react";
import debounce from "../utils/debounce";

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useCallback(debounce((val)=>
    onSearch(val), 300), [] );

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    debouncedSearch(searchQuery);
  };

  return (
    <div>
      <div className="search">
        {" "}
        <h3>Search Movies</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              debouncedSearch(e.target.value);
            }}
          />
        </form>
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </div>
  );
}
