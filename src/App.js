import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Fullpage from 'pages/Fullpage';
import ResultHight from 'pages/ResultHight';
import ResultMedium from 'pages/ResultMedium';
import ResultLow from 'pages/ResultLow';
import NotFound from "pages/NotFound";
import Resume from "notion/pages/Resume";

import "styles/import.css";


function App() {
  return (
    <div className="App mode-Dark">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Fullpage/>}></Route>
          <Route path="/ResultHight" element={<ResultHight/>}></Route>
          <Route path="/ResultMedium" element={<ResultMedium/>}></Route>
          <Route path="/ResultLow" element={<ResultLow/>}></Route>
          <Route path="/Resume" element={<Resume/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
