// src/components/SearchBar.js
import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for games..."
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;
