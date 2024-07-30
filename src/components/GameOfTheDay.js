// src/components/GameOfTheDay.js
import React from "react";
import GameCard from "./GameCard";

const GameOfTheDay = ({ game }) => {
  return (
    <div className="game-of-the-day">
      <h2>Game of the Day</h2>
      <GameCard game={game} />
    </div>
  );
};

export default GameOfTheDay;
