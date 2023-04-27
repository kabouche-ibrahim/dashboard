<<<<<<< HEAD
import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = ({ setSelectedFilter }) => {
  return (
    <div>
      <div className="grid-container">
        <Link to="/Demandes" className="card" onClick={() => setSelectedFilter(0)}>Demandes attente validation</Link>
        <Link to="/Demandes" className="card" onClick={() => setSelectedFilter(1)}>Demandes validées</Link>
      </div>
    </div>
  );
};

export default Dashboard;


=======
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1>tableau de bord </h1>
        </div>
    );
};

export default Dashboard;
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
