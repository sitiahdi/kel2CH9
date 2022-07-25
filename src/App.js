import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import GameListPage from "./views/GameListPage";

// Tambah route baru
// <Route path="/" element={<Component Page nya />}/>

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/game-list" element={<GameListPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
