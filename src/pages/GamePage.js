import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import GameDetails from "../components/GameDetails";
import Footer from "../components/Footer";

const GamePage = ({ games }) => {
  const { id } = useParams();
  const game = games.find((game) => game.id.toString() === id);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="game-page">
      <Header />
      <GameDetails game={game} />
      <Footer />
    </div>
  );
};

export default GamePage;
