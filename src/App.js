import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Fullpage from 'pages/Fullpage';
import Result from 'components/Result';
import NotFound from "pages/NotFound";

import "styles/import.css";


function App() {
  return (
    <div className="App mode-Dark">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Fullpage/>}></Route>
          <Route path="/Result" element={<Result/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
