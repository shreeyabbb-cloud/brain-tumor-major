import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Privacy.css';

// ACTUAL experimental results from the current prototype
// PLACEHOLDER: Data could be fetched from API later
const privacyData = [
  { sigma: 0.0, accuracy: 0.4068, epsilon: '∞', label: 'No noise (baseline)' },
  { sigma: 0.3, accuracy: 0.4746, epsilon: 403.73, label: 'Low noise' },
  { sigma: 0.6, accuracy: 0.3898, epsilon: 201.87, label: 'Medium noise' },
  { sigma: 1.0, accuracy: 0.3051, epsilon: 121.12, label: 'High noise' },
];

// Sort data for the reversed privacy budget chart to properly display continuous trend
const epsilonData = [
  { epsilon: 403.73, accuracy: 0.4746, label: 'Low noise' },
  { epsilon: 201.87, accuracy: 0.3898, label: 'Medium noise' },
  { epsilon: 121.12, accuracy: 0.3051, label: 'High noise' },
].sort((a, b) => b.epsilon - a.epsilon);

const Privacy = () => {
  return (
    <div className="container">
      <div className="section-header">
        <span className="section-label">DATA PROTECTION</span>
        <h1 className="page-title">Privacy Preservation</h1>
        <p className="page-subtitle">Protecting patient data through federated learning and differential privacy mechanisms</p>
        <p className="placeholder-note academic-note">Academic research prototype. Not intended for clinical diagnosis or treatment decisions.</p>
      </div>

      <section className="section">
        <h2>Privacy Flow Visualization</h2>
        <div className="privacy-flow-container card">
          <div className="privacy-flow">
            <div className="flow-step danger">
              <div className="step-icon">✕</div>
              <div className="step-content">
                <h3>Raw Patient Data</h3>
                <p><strong>NOT shared</strong> with any external party</p>
              </div>
            </div>
            
            <div className="flow-connector">
              <div className="flow-line"></div>
            </div>
            
            <div className="flow-step safe">
              <div className="step-icon">1</div>
              <div className="step-content">
                <h3>Local Training</h3>
                <p>Model trained on-device / on-site</p>
              </div>
            </div>

            <div className="flow-connector">
              <div className="flow-line"></div>
            </div>
            
            <div className="flow-step safe">
              <div className="step-icon">2</div>
              <div className="step-content">
                <h3>Model Updates</h3>
                <p>Only gradients/weights are extracted</p>
              </div>
            </div>

            <div className="flow-connector">
              <div className="flow-line"></div>
            </div>
            
            <div className="flow-step safe">
              <div className="step-icon">3</div>
              <div className="step-content">
                <h3>+ Differential Privacy Noise</h3>
                <p>Gaussian noise injection applied</p>
              </div>
            </div>

            <div className="flow-connector">
              <div className="flow-line"></div>
            </div>
            
            <div className="flow-step safe">
              <div className="step-icon">4</div>
              <div className="step-content">
                <h3>Federated Aggregation</h3>
                <p>Secure server-side aggregation</p>
              </div>
            </div>

            <div className="flow-connector">
              <div className="flow-line"></div>
            </div>
            
            <div className="flow-step safe">
              <div className="step-icon">5</div>
              <div className="step-content">
                <h3>Global Model</h3>
                <p>Privacy-preserved final result</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Key Privacy Concepts</h2>
        <div className="concepts-grid">
          <div className="card concept-card">
            <div className="concept-icon">FL</div>
            <h3>Federated Learning</h3>
            <p>Patient data never leaves the local institution. Only model updates are communicated.</p>
          </div>
          <div className="card concept-card">
            <div className="concept-icon">DP</div>
            <h3>Differential Privacy</h3>
            <p>Calibrated noise is added to model updates before sharing, providing mathematical privacy guarantees.</p>
          </div>
          <div className="card concept-card">
            <div className="concept-icon">ε</div>
            <h3>Privacy Budget (ε)</h3>
            <p>Epsilon quantifies the privacy loss. Lower epsilon = stronger privacy, but potentially reduced model utility.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Experimental Results: Privacy-Utility Trade-off</h2>
        <p className="placeholder-note">Experimental results from the current prototype</p>
        
        <div className="charts-container">
          <div className="card chart-card">
            <h3>Accuracy vs Noise Level (σ)</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={privacyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="sigma" label={{ value: 'Noise Level (σ)', position: 'bottom', offset: 0 }} />
                  <YAxis label={{ value: 'Accuracy', angle: -90, position: 'insideLeft' }} tickFormatter={(val) => `${(val * 100).toFixed(0)}%`} domain={[0.2, 0.6]} />
                  <Tooltip formatter={(value) => `${(value * 100).toFixed(2)}%`} />
                  <Line type="monotone" dataKey="accuracy" stroke="#0891B2" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card chart-card">
            <h3>Privacy-Utility Trade-off</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={epsilonData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="epsilon" reversed={true} label={{ value: 'Privacy Budget (ε)', position: 'bottom', offset: 0 }} />
                  <YAxis label={{ value: 'Accuracy', angle: -90, position: 'insideLeft' }} tickFormatter={(val) => `${(val * 100).toFixed(0)}%`} domain={[0.2, 0.6]} />
                  <Tooltip formatter={(value) => `${(value * 100).toFixed(2)}%`} />
                  <Line type="monotone" dataKey="accuracy" stroke="#06B6D4" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card warning-card">
          <p><strong>Note:</strong> These epsilon values are conservative approximate values computed using naive composition. They do NOT represent tight formal privacy guarantees from advanced accountants such as Rényi Differential Privacy (RDP). The privacy analysis is part of ongoing research.</p>
        </div>

        <div className="card table-card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Noise (σ)</th>
                <th>Accuracy</th>
                <th>Privacy Budget (ε)</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {privacyData.map((row, i) => (
                <tr key={i}>
                  <td>{row.sigma.toFixed(1)}</td>
                  <td>{(row.accuracy * 100).toFixed(2)}%</td>
                  <td>{typeof row.epsilon === 'number' ? `≈ ${row.epsilon.toFixed(2)}` : row.epsilon}</td>
                  <td>{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
