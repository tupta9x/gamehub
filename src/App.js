import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import UserProfile from "./pages/UserProfile";
import "./App.css"; // Import CSS file

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching game data:", error));
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home games={games} />} />
      </Routes>
    </Router>
  );
  // return (
  //   <Router>
  //     <div className="app">
  //       <Routes>
  //         <Route path="/" element={<Home games={games} />} />
  //         <Route path="/game/:id" element={<GamePage games={games} />} />
  //         <Route path="/profile" element={<UserProfile />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
};

export default App;
