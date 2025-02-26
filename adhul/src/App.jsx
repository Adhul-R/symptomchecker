import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import SymptomChecker from "./components/SymptomChecker";
import Login from "./components/Login";
import Register from "./components/Register";
import DietPlan from "./components/DietPlan";
import HopeMessage from "./components/HopeMessage";
import "./styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navigation isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <MainContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      </div>
    </Router>
  );
};

const Navigation = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/hope-message"); // Move to hope message before logging out
  };

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <h1 className="text-xl font-bold">Symptom Checker</h1>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/symptoms" className="nav-button">Check Symptoms</Link>
            <Link to="/diet-plan" className="nav-button">Diet Plan</Link>
            <button onClick={handleLogout} className="nav-button logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const MainContent = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <SymptomChecker /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/symptoms" element={isAuthenticated ? <SymptomChecker /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/diet-plan" element={isAuthenticated ? <DietPlan /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/hope-message" element={<HopeMessage />} />
    </Routes>
  );
};

export default App;