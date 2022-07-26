import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import ErrHandlePage from "./views/ErrHandle";
import GameListPage from "./views/GameListPage";
import GameDetailsPage from "./views/GameDetailsPage";
import Register from './views/Register';
import Login from './views/login';

// Tambah route baru (tambahkan diatas ErrHandlePage)
// <Route path="/" element={<Component Page nya />}/>

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/game-list" element={<GameListPage />}/>
          <Route path="/game-details/:userId" element={<GameDetailsPage />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<ErrHandlePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
