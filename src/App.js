import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import GameListPage from "./views/GameListPage";
import GameDetailsPage from "./views/GameDetailsPage";

// Tambah route baru
// <Route path="/" element={<Component Page nya />}/>

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/game-list" element={<GameListPage />}/>
          <Route path="/game-details/:id" element={<GameDetailsPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
