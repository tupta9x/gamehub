// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ popularGames }) => {
  return (
    <aside className="sidebar">
      <h2>Popular Games</h2>
      <ul>
        {popularGames.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
