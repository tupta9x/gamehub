// src/components/GameGrid.js
import React from "react";
import "./GameGrid.css";

const GameGrid = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map((game, index) => (
        <div key={index} className="game-card">
          <img src={game.image} alt={game.name} />
          <h3>{game.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
