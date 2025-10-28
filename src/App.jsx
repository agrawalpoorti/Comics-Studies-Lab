import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
}

export default App;