import React from "react";

import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";

import First from "./First";
import Apage from "./A-page";
import Bpage from "./B-page";
import Cpage from "./C-page";

import "./App.css";

export default function Main() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <ul>
            <li>
              {" "}
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/apage">A-page</Link>
            </li>
            <li>
              <Link to="/bpage">B-page</Link>
            </li>
            <li>
              <Link to="/cpage">C-page</Link>
            </li>
          </ul>
        </header>

        <div className="container">
          <div className="contents">
            <Routes>
              <Route path="/" element={<First />} />
              <Route path="/apage" element={<Apage />} />
              <Route path="/bpage" element={<Bpage />} />
              <Route path="/cpage" element={<Cpage />} />
            </Routes>
          </div>
        </div>
      </div>
      <style>{`

      .header {

      }

      .header ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;
      }

      .header ul li {
        list-style: none;
      }
      
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 500px;
      }

      .content {
        background-color: #eee;
      }
    `}</style>
    </BrowserRouter>
  );
}
