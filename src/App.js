import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Fullpage from 'pages/Fullpage';
import ResultHight from 'pages/ResultHight';
import ResultMedium from 'pages/ResultMedium';
import ResultLow from 'pages/ResultLow';
import NotFound from "pages/NotFound";
import Resume from "notion/pages/Resume";
import Detail from "notion/pages/Detail";

import { DataProvider } from 'notion/components/DataContext'; // 추가

import "styles/normaulrze.css"
import "styles/reset.css"
import "styles/font.css"
import "styles/var.css"

function App() {
  return (
    <div className="App mode-Dark">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <DataProvider> {/* DataProvider로 감싸기 */}
          <Routes>
            <Route path="/" element={<Fullpage/>}></Route>
            <Route path="/ResultHight" element={<ResultHight/>}></Route>
            <Route path="/ResultMedium" element={<ResultMedium/>}></Route>
            <Route path="/ResultLow" element={<ResultLow/>}></Route>
            <Route path="/Resume" element={<Resume/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
