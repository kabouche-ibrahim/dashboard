import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Demandes from "./pages/Demandes";
import Stats from "./pages/Stats";
import Sidebar from "./Components/Sidebar";
import LoginForm from "./Components/loginform";
<<<<<<< HEAD
import Navbar from "./Components/NavBar";
import DemandeForm from "./pages/DemandeForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
=======

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") { 
      setIsLoggedIn(true);
    }
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Sidebar>
<<<<<<< HEAD
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard setSelectedFilter={setSelectedFilter} />} />
            <Route path="/Dashboard" element={<Dashboard setSelectedFilter={setSelectedFilter} />} />
            <Route path="/Demandes" element={<Demandes filter={selectedFilter} />} />
            <Route path="/Stats" element={<Stats />} />
            <Route path="/DemandeForm" element={<DemandeForm />} />
=======
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Demandes" element={<Demandes />} />
            <Route path="/Stats" element={<Stats />} />
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
          </Routes>
        </Sidebar>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
};

export default App;
