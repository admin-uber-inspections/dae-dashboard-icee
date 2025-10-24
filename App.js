import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientTable from './components/ClientTable';
import TrendChart from './components/TrendChart';
import './App.css';

function App() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockDAEData = [
      {
        id: 1,
        name: 'Randy Ora - Laguna Niguel, CA',
        authorityScore: 92,
        progress: 0.95,
        status: 'On Track',
        trendData: [85, 88, 90, 91, 92]
      },
      {
        id: 2,
        name: 'Tammy Petit Loveland - Castle Rock, CO',
        authorityScore: 87,
        progress: 0.88,
        status: 'On Track',
        trendData: [80, 82, 85, 86, 87]
      },
      {
        id: 3,
        name: 'Ryan Schramm - San Clemente, CA',
        authorityScore: 85,
        progress: 0.82,
        status: 'Needs Attention',
        trendData: [78, 80, 82, 83, 85]
      },
      {
        id: 4,
        name: 'Ryan Melcher - Carmel, CA',
        authorityScore: 94,
        progress: 0.97,
        status: 'On Track',
        trendData: [88, 90, 92, 93, 94]
      }
    ];
    setClients(mockDAEData);
    setLoading(false);
  }, []);

  if (loading) return <div className="loading">Loading DAE dashboard...</div>;

  const avgTrendData = clients[0].trendData.map((_, i) =>
    clients.reduce((sum, c) => sum + c.trendData[i], 0) / clients.length
  );

  return (
    <div className="App">
      <header className="header">
        <h1>Digital Authority Engine Client Dashboard</h1>
        <p>Tracking DAE metrics for Randy, Tammy, Ryan S., and Ryan M.</p>
      </header>
      <main>
        <section className="clients-section">
          <h2>Client DAE Overview</h2>
          <ClientTable clients={clients} />
        </section>
        <section className="trends-section">
          <h2>Average Authority Trends</h2>
          <TrendChart data={avgTrendData} />
        </section>
      </main>
    </div>
  );
}

export default App;