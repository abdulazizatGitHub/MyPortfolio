import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  let PageComponent;
  switch (activePage) {
    case 'dashboard':
      PageComponent = <Dashboard />;
      break;
    // Add cases for other pages (projects, education, etc.)
    default:
      PageComponent = <Dashboard />;
  }

  return (
    <div className="admin-app">
      <Sidebar onNavigate={setActivePage} activePage={activePage} />
      <main className="admin-main-content">
        {PageComponent}
      </main>
    </div>
  );
}

export default App;
