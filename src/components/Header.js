// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>GameHub</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for games..."
          onChange={onSearch}
        />
      </div>
    </header>
  );
};

export default Header;
