import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/ResponsiveElement/Navbar/Navbar";

import Home from "./pages/home/Home";
import GraphPage from "./pages/graphPage/GraphPage";

function App() {
  return (
    <Router basename="/il-nostro-pianeta">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphs" element={<GraphPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
