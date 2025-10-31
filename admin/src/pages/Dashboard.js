import React from 'react';
import './Dashboard.css';

const chartData = [
  { label: 'Projects', value: 6 },
  { label: 'Education', value: 2 },
  { label: 'Experience', value: 1 },
  { label: 'Skills', value: 10 },
];

const funnelData = [
  { label: 'Website Visits', value: 1200 },
  { label: 'Page Views', value: 950 },
  { label: 'CV Downloads', value: 120 },
  { label: 'Contact Form Submissions', value: 18 },
];

const lineChartPoints = [120, 200, 350, 500, 700, 950, 1200]; // Dummy visits over time
const pieData = [
  { label: 'CV Downloads', value: 120, color: '#00abf0' },
  { label: 'Contact Submissions', value: 18, color: '#00ffb0' },
];
const pieTotal = pieData.reduce((sum, d) => sum + d.value, 0);

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="dashboard-main-content">
      <h2 className="dashboard-title">Dashboard</h2>
      {/* Stats Row */}
      <div className="dashboard-stats-row stats-row">
        {chartData.map((item) => (
          <div className="stat-card" key={item.label}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="dashboard-section-divider" />
      {/* Pie + Quick Stats Row */}
      <div className="dashboard-pie-quick-row">
        <div className="dashboard-pie-chart" role="img" aria-label="Downloads and Contacts Pie Chart">
          <div className="pie-title">Downloads & Contacts</div>
          <svg width="140" height="140" viewBox="0 0 42 42" className="pie-svg styled-pie-svg">
            {pieData.reduce((acc, d, i) => {
              const prev = acc.total;
              const val = (d.value / pieTotal) * 100;
              acc.total += val;
              acc.slices.push(
                <circle
                  key={d.label}
                  r="15.91549430918954"
                  cx="21"
                  cy="21"
                  fill="transparent"
                  stroke={d.color}
                  strokeWidth="6"
                  strokeDasharray={`${val} ${100 - val}`}
                  strokeDashoffset={100 - prev}
                />
              );
              return acc;
            }, { total: 0, slices: [] }).slices}
          </svg>
          <div className="pie-legend">
            {pieData.map(d => (
              <div className="pie-legend-item" key={d.label}>
                <span className="pie-legend-color" style={{ background: d.color }}></span>
                <span className="pie-legend-label">{d.label}</span>
                <span className="pie-legend-value">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-summary">
          <div className="summary-title">Quick Stats</div>
          <ul className="summary-list">
            <li><strong>Total Visits:</strong> 1200</li>
            <li><strong>Page Views:</strong> 950</li>
            <li><strong>CV Downloads:</strong> 120</li>
            <li><strong>Contact Submissions:</strong> 18</li>
          </ul>
        </div>
      </div>
      <div className="dashboard-section-divider" />
      {/* Graphs Row */}
      <div className="dashboard-graphs-row">
        <div className="dashboard-chart-placeholder" role="img" aria-label="Visits Over Time Line Chart">
          <div className="chart-title">Visits Over Time</div>
          <svg className="line-chart" width="100%" height="180" viewBox="0 0 320 180">
            <polyline
              fill="none"
              stroke="var(--main-color)"
              strokeWidth="4"
              points={lineChartPoints.map((v, i) => `${i * 50 + 20},${180 - v * 0.13}`).join(' ')}
            />
            {lineChartPoints.map((v, i) => (
              <circle
                key={i}
                cx={i * 50 + 20}
                cy={180 - v * 0.13}
                r="5"
                fill="#fff"
                stroke="var(--main-color)"
                strokeWidth="2"
              />
            ))}
          </svg>
          <div className="line-chart-labels">
            {lineChartPoints.map((v, i) => (
              <span key={i} style={{ left: `${i * 50 + 20}px` }}>{v}</span>
            ))}
          </div>
        </div>
        <div className="dashboard-funnel" role="region" aria-label="User Engagement Funnel">
          <div className="funnel-title">User Engagement Funnel</div>
          <div className="funnel-steps">
            {funnelData.map((step, idx) => (
              <div className="funnel-step" key={step.label}>
                <div className="funnel-step-label">{step.label}</div>
                <div className="funnel-step-bar-wrapper">
                  <div
                    className="funnel-step-bar"
                    style={{ width: `${(step.value / funnelData[0].value) * 100}%` }}
                  >
                    <span className="funnel-step-value">{step.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard; 