<<<<<<< HEAD
import React, { useState } from "react";
import "./Demandes.css";

const Demandes = ({ filter }) => {
  return (
      <div className="table-container">
        {filter === 0 &&
            <table className="custom-table">
                <thead>
                    <tr>
                        <th className="table-header">N° demande</th>
                        <th className="table-header">Titre</th>
                        <th className="table-header">Assigné</th>
                        <th className="table-header">état</th>
                        <th className="table-header">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-cell">1</td>
                        <td className="table-cell">Titre 1</td>
                        <td className="table-cell">Assigné 1</td>
                        <td className="table-cell">état 1</td>
                        <td className="table-cell">2023-04-24</td>
                    </tr>
                    <tr>
                        <td className="table-cell">2</td>
                        <td className="table-cell">Titre 2</td>
                        <td className="table-cell">Assigné 2</td>
                        <td className="table-cell">état 2</td>
                        <td className="table-cell">2023-04-25</td>
                    </tr>
                </tbody>
            </table>
        }
        {filter === 1 &&
            <table className="custom-table">
                <thead>
                    <tr>
                        <th className="table-header">N° demande</th>
                        <th className="table-header">Titre</th>
                        <th className="table-header">Assigné</th>
                        <th className="table-header">état</th>
                        <th className="table-header">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-cell">3</td>
                        <td className="table-cell">Titre 3</td>
                        <td className="table-cell">Assigné 3</td>
                        <td className="table-cell">état 3</td>
                        <td className="table-cell">2023-04-24</td>
                    </tr>
                    <tr>
                        <td className="table-cell">4</td>
                        <td className="table-cell">Titre 4</td>
                        <td className="table-cell">Assigné 4</td>
                        <td className="table-cell">état 4</td>
                        <td className="table-cell">2023-04-25</td>
                    </tr>
                </tbody>
            </table>
        }    
     </div>   
  );
=======
import React from 'react';

const Demandes = () => {
    return (
        <div>
            <h1>Demandes</h1>
        </div>
    );
>>>>>>> 4ceccda810ddd66343cbc69ffe796cc997cdb8d1
};

export default Demandes;