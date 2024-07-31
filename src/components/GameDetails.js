// src/components/GameDetails.js
import React from "react";
import "./GameDetails.css";

const GameDetails = ({ game }) => {
  const iframeRef = React.useRef(null);

  const handleFullscreen = () => {
    if (iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    } else if (iframeRef.current.mozRequestFullScreen) {
      // Firefox
      iframeRef.current.mozRequestFullScreen();
    } else if (iframeRef.current.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      iframeRef.current.webkitRequestFullscreen();
    } else if (iframeRef.current.msRequestFullscreen) {
      // IE/Edge
      iframeRef.current.msRequestFullscreen();
    }
  };

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-details">
      <iframe
        ref={iframeRef}
        src={game.url}
        width="600"
        height="400"
        title={game.name}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button onClick={handleFullscreen}>Fullscreen</button>
      <h2>{game.name}</h2>
      <img src={game.image} alt={game.name} />
      <p>{game.description}</p>
      <p>{game.instructions}</p>
    </div>
  );
};

export default GameDetails;
