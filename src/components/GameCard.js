// src/components/GameCard.js
import React from "react";
import "./GameCard.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.name} />
      <h3>{game.name}</h3>
    </div>
  );
};

export default GameCard;
