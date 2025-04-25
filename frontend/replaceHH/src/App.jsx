import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
