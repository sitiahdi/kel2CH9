import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import ErrHandlePage from "./views/ErrHandle";
import GameListPage from "./views/GameListPage";
import GameDetailsPage from "./views/GameDetailsPage";

// Tambah route baru (tambahkan diatas ErrHandlePage)
// <Route path="/" element={<Component Page nya />}/>

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/game-list" element={<GameListPage />}/>
          <Route path="/game-details/:userId" element={<GameDetailsPage />}/>



          <Route path="*" element={<ErrHandlePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
