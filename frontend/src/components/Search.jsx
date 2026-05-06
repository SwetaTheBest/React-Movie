import React, { useState, useRef } from "react";
import debounce from "../utils/debounce";


export default function Search({onSearch}) {
  const [searchQuery, setSearchQuery] = useState(""); 
  const debouncedSearch = useRef(debounce(onSearch, 300)) ;  

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    onSearch(searchQuery);
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
              onSearch(e.target.value);
            }
          }
          />
        </form>
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </div>
  );
}
