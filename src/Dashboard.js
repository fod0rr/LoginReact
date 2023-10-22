// Dashboard.js
import React from 'react';

const Dashboard = ({ username, handleLogout }) => {
  return (
    <div className="dashboard">
      <h2>Bem-vindo, {username}!</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Dashboard;
