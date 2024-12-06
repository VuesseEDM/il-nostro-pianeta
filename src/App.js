import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ResponsiveElement/Navbar/Navbar";

import Home from "./pages/home/Home";
import GraphPage from "./pages/graphPage/GraphPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/graphs" element={<GraphPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
