import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard  from "./pages/Dashboard/Layout"
import AdWizard from "./pages/Dashboard/AdWizard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add_wizard" element={<AdWizard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
