// src/pages/Home.js
import React, { useState } from "react";
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import Footer from "../components/Footer";
import "./Home.css";

const Home = ({ games }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleFullscreenClick = () => {
    const iframe = document.querySelector(".selected-game iframe");
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      /* Firefox */
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      /* IE/Edge */
      iframe.msRequestFullscreen();
    }
  };

  return (
    <div className="home">
      <Header onSearch={(e) => setSearchTerm(e.target.value)} />
      <div className="content">
        <div className="game-grid">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div
                key={game.id}
                onClick={() => handleGameClick(game)}
                className="game-card-wrapper"
              >
                <GameCard game={game} />
              </div>
            ))
          ) : (
            <p>No games found</p>
          )}
          {selectedGame && (
            <div className="selected-game">
              <div className="selected-game-content">
                <iframe
                  src={selectedGame.url}
                  title={selectedGame.name}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className="selected-game-header">
                  <h2>{selectedGame.name}</h2>
                  <button
                    className="fullscreen-button"
                    onClick={handleFullscreenClick}
                  >
                    Fullscreen
                  </button>
                </div>
                <div className="selected-game-description">
                  <p>{selectedGame.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
