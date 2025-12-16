import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Adventures from "./pages/Adventures";
import Signup from "./pages/Signup"; // ✅ ADD THIS
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Adventures (Map Page) */}
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/login" element={<Login />} />
        {/* Signup */}
        <Route path="/signup" element={<Signup />} /> {/* ✅ ADD THIS */}
      </Routes>
    </Router>
  );
};

export default App;
