import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Adventures from "./pages/Adventures";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Pycaster from "./pages/Pycaster";
import StartingPage from "./pages/StartingPage";
import Story from "./pages/Story";
import Reward from "./pages/Reward";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Map */}
        <Route path="/adventures" element={<Adventures />} />

        {/* Level Flow */}
        <Route path="/level/:levelId" element={<StartingPage />} />
        <Route path="/story/:levelId" element={<Story />} />

        <Route path="/pycaster/:levelId" element={<Pycaster />} />
        <Route path="/reward" element={<Reward />} />

        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
