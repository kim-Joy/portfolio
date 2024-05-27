import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Test from 'pages/Test';
import NotFound from "pages/NotFound";

import "styles/import.css";


function App() {
  return (
    <div className="App mode-Dark">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Test/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
