import React, { useState } from "react";
import './Dashboard.css';

const Dashboard = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  const handleAnnuler = () => {
    setFormVisible(false);
  };
  return (
    <div>
      <div className="nouv-dem">
        <button className="button" onClick={toggleForm}>
          Nouvelle demande
        </button>
      </div>
      
      <div className={formVisible ? "form-container active" : "form-container"}>
        <form className="demande-form">
          <label>Type de mission:</label>
          <select className="input">
            <option value="mission1">Mission 1</option>
            <option value="mission2">Mission 2</option>
            <option value="mission3">Mission 3</option>
          </select>

          <label>Motif de déplacement:</label>
          <textarea className="input-motif" rows="2"></textarea>

          <label>Moyen de transport:</label>
          <select className="input">
            <option value="vehicule">Véhicule</option>
            <option value="vehicule-personnel">Véhicule personnel</option>
          </select>

          <label>Agence:</label>
          <select className="input">
            <option value="">--Choisir une agence--</option>
            <option value="agence1">Agence 1</option>
            <option value="agence2">Agence 2</option>
            <option value="agence3">Agence 3</option>
          </select>

          <label>Date et heure départ:</label>
          <input type="datetime-local" className="input" />

          <label>Date et heure retour:</label>
          <input type="datetime-local" className="input" />

          <div className="button-container">
            <button className="button" type="submit">
              Envoyer
            </button>
            <button className="button" type="button" onClick={handleAnnuler}>
              Annuler
            </button>
            <button className="button" type="button" onClick={handleAnnuler}>
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    
    <div>
      <div className="grid-container">
        <a href="#" className="card">Demandes attente validation</a>
        <a href="#" className="card">Demandes validées</a>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
