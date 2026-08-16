import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './FederatedLearning.css';

// TODO: Replace with actual client data distribution
// PLACEHOLDER: Example data for demonstration
const distributionData = [
  { name: 'Client 1', gradeII: 45, gradeIII: 30, gradeIV: 25 },
  { name: 'Client 2', gradeII: 20, gradeIII: 50, gradeIV: 30 },
  { name: 'Client 3', gradeII: 35, gradeIII: 15, gradeIV: 50 },
];

export default function FederatedLearning() {
  return (
    <div className="container federated-container">
      <div className="page-header">
        <span className="section-label">DISTRIBUTED TRAINING</span>
        <h1 className="page-title">Federated Learning Architecture</h1>
        <p className="page-subtitle">
          Collaborative model training across distributed clients without sharing raw patient data
        </p>
        <p className="academic-disclaimer">Academic research prototype. Not intended for clinical diagnosis or treatment decisions.</p>
      </div>

      <section className="section architecture-section">
        <div className="section-header">
          <h2>Federated Architecture Visualization</h2>
          <p>Training models directly at the source (hospitals/clinics) and aggregating the learned updates.</p>
        </div>

        <div className="architecture-diagram">
          <div className="clients-layer">
            <div className="client-card client-1">
              <h3>Client 1 (Hospital A)</h3>
              <div className="client-detail">
                <span className="detail-label">Local Data:</span>
                <span className="detail-value">450 scans</span>
              </div>
              <div className="client-detail">
                <span className="detail-label">Local Training:</span>
                <span className="detail-value">Epochs: 5 (92% acc)</span>
              </div>
              <div className="update-arrow">
                <span>Model Update</span>
                <div className="arrow-down"></div>
              </div>
            </div>

            <div className="client-card client-2">
              <h3>Client 2 (Hospital B)</h3>
              <div className="client-detail">
                <span className="detail-label">Local Data:</span>
                <span className="detail-value">320 scans</span>
              </div>
              <div className="client-detail">
                <span className="detail-label">Local Training:</span>
                <span className="detail-value">Epochs: 5 (89% acc)</span>
              </div>
              <div className="update-arrow">
                <span>Model Update</span>
                <div className="arrow-down"></div>
              </div>
            </div>

            <div className="client-card client-3">
              <h3>Client 3 (Hospital C)</h3>
              <div className="client-detail">
                <span className="detail-label">Local Data:</span>
                <span className="detail-value">510 scans</span>
              </div>
              <div className="client-detail">
                <span className="detail-label">Local Training:</span>
                <span className="detail-value">Epochs: 5 (94% acc)</span>
              </div>
              <div className="update-arrow">
                <span>Model Update</span>
                <div className="arrow-down"></div>
              </div>
            </div>
          </div>

          <div className="server-layer">
            <div className="server-card">
              <h3>FEDERATED SERVER</h3>
              <div className="server-detail">
                <strong>FedAvg Aggregation</strong>
                <p>Weighted average of model updates from all clients.</p>
              </div>
            </div>
          </div>

          <div className="global-model-layer">
            <div className="arrow-down server-to-global"></div>
            <div className="global-model-card">
              <h3>GLOBAL MODEL</h3>
              <p><strong>Updated Global Model</strong></p>
              <p>Distributed back to clients for the next communication round.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid-2-col">
        <section className="section workflow-section">
          <div className="section-header">
            <h2>FedAvg Workflow</h2>
            <p>The standard federated averaging process.</p>
          </div>
          <div className="card workflow-card">
            <ol className="workflow-list">
              <li>Server distributes global model to all clients.</li>
              <li>Each client trains locally on its private data.</li>
              <li>Clients send model updates (not raw data) to server.</li>
              <li>Server aggregates updates using weighted averaging.</li>
              <li>Updated global model is sent back to clients.</li>
              <li>Repeat for <em>T</em> communication rounds.</li>
            </ol>
          </div>
        </section>

        <section className="section distribution-section">
          <div className="section-header">
            <h2>Non-IID Data Distribution</h2>
            <p>In real-world federated scenarios, data across institutions is typically non-identically distributed (non-IID), meaning each client may have different proportions of tumor grades or patient demographics.</p>
          </div>
          <div className="card chart-card">
            <div className="placeholder-note">
              <span>// PLACEHOLDER: Example data for demonstration</span>
            </div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={distributionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend />
                  <Bar dataKey="gradeII" name="Grade II" fill="#06B6D4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="gradeIII" name="Grade III" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="gradeIV" name="Grade IV" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
