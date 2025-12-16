import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Adventures from "./pages/Adventures";
// import Characters from "./pages/Characters";
// import Learn from "./pages/Learn";
// import FAQ from "./pages/FAQ";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Adventures (Map Page) */}
        <Route path="/adventures" element={<Adventures />} />

        {/* Future Pages */}
        {/* <Route path="/characters" element={<Characters />} /> */}
        {/* <Route path="/learn" element={<Learn />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
