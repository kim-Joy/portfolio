import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Intro from "pages/Intro";
import NotFound from "pages/Intro";

import "styles/import.css";


function App() {
  return (
    <div className="App mode-Dark">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Intro/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
