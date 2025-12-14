import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here, e.g.: /characters, /adventures, /learn */}
      </Routes>
    </Router>
  );
};

export default App;
