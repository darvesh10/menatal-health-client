
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
 import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Insights from "./pages/Insights";
import AiInsights from "./pages/AiInsights";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/journal" element={<Journal />} />
        <Route path="/insights" element={<Insights />} />
       <Route path="/ai-insights" element={<AiInsights />} />

      </Routes>
    </Router>
  );
};

export default App;

