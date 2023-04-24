import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Demandes from "./pages/Demandes";
import Stats from "./pages/Stats";
import Sidebar from "./Components/Sidebar";
import LoginForm from "./Components/loginform";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") { 
      setIsLoggedIn(true);
    }
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Demandes" element={<Demandes />} />
            <Route path="/Stats" element={<Stats />} />
          </Routes>
        </Sidebar>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
};

export default App;
