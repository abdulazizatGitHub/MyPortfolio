import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate, activePage }) => (
  <aside className="admin-sidebar">
    <div className="sidebar-title">Admin Panel</div>
    <nav>
      <ul>
        <li className={activePage === 'dashboard' ? 'active' : ''} onClick={() => onNavigate('dashboard')}>Dashboard</li>
        <li className={activePage === 'projects' ? 'active' : ''} onClick={() => onNavigate('projects')}>Projects</li>
        <li className={activePage === 'education' ? 'active' : ''} onClick={() => onNavigate('education')}>Education</li>
        <li className={activePage === 'experience' ? 'active' : ''} onClick={() => onNavigate('experience')}>Experience</li>
        <li className={activePage === 'skills' ? 'active' : ''} onClick={() => onNavigate('skills')}>Skills</li>
        <li className={activePage === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>About/Contact</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar; 