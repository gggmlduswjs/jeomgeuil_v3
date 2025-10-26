import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Explore from "./pages/Explore";
import Review from "./pages/Review";
import FreeConvert from "./pages/FreeConvert"; 
import BrailleCell from "./components/BrailleCell";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/review" element={<Review />} />
        <Route path="/freeconvert" element={<FreeConvert />} />
      </Routes>
    </BrowserRouter>
  );
}
