import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Results.css';

// TODO: Replace with actual classification metrics from model evaluation
const classificationMetrics = [
  { metric: 'Accuracy', value: 0.90, displayValue: '~90%' },
  { metric: 'Precision', value: 0.88, displayValue: '~88%' },
  { metric: 'Recall', value: 0.87, displayValue: '~87%' },
  { metric: 'F1-Score', value: 0.87, displayValue: '~87%' },
];

const Results = () => {
  return (
    <div className="container results-page">
      <div className="section-header">
        <span className="section-label">EVALUATION</span>
        <h1 className="page-title">Experimental Results</h1>
        <p className="page-subtitle">Performance evaluation of the privacy-preserving brain tumor detection pipeline</p>
      </div>

      {/* MAIN RESULT HIGHLIGHT */}
      <section className="section">
        <div className="card card-elevated hero-stat-card">
          <div className="hero-stat-content">
            <div className="hero-stat-header">
              <h2>Tumor Grade Classification</h2>
              <span className="badge badge-primary">Primary Task</span>
            </div>
            {/* TODO: Replace with final confirmed accuracy value */}
            <div className="hero-stat-value">~90%</div>
            <p className="hero-stat-note">Centralized baseline accuracy on BraTS2020 dataset</p>
          </div>
        </div>
      </section>

      {/* CLASSIFICATION METRICS */}
      <section className="section">
        <h3 className="section-title">Classification Metrics</h3>
        <p className="placeholder-note">Values are approximate. To be updated with final experiment results.</p>
        
        <div className="grid-4 stat-cards-grid mt-4">
          {classificationMetrics.map((item, index) => (
            <div className="card stat-card" key={index}>
              <div className="stat-label">{item.metric}</div>
              <div className="stat-value">{item.displayValue}</div>
            </div>
          ))}
        </div>

        <div className="card chart-card mt-4">
          <div className="chart-container" style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={classificationMetrics}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="metric" axisLine={false} tickLine={false} />
                <YAxis domain={[0, 1]} axisLine={false} tickLine={false} />
                <Tooltip 
                  formatter={(value) => [`${(value * 100).toFixed(0)}%`, 'Score']}
                  cursor={{fill: 'var(--bg, #FAFBFC)'}}
                />
                <Bar dataKey="value" fill="var(--primary, #0891B2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <div className="grid-2 mt-4">
        {/* TUMOR SEGMENTATION RESULTS */}
        <section className="section">
          <div className="card h-100">
            <h3 className="section-title">Tumor Segmentation Performance</h3>
            <div className="dice-score-overview">
              <span className="dice-score-label">Dice Score:</span>
              <span className="dice-score-value">≈ 0.72–0.77</span>
            </div>
            {/* TODO: Replace with actual Dice scores per tumor region */}
            
            <div className="progress-bars-container mt-4">
              <div className="progress-item">
                <div className="progress-label-row">
                  <span>Whole Tumor</span>
                  <span>0.77</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '77%' }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label-row">
                  <span>Tumor Core</span>
                  <span>0.74</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '74%' }}></div>
                </div>
              </div>

              <div className="progress-item">
                <div className="progress-label-row">
                  <span>Enhancing Tumor</span>
                  <span>0.72</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
            
            <p className="card-note mt-4 text-secondary">
              <small>Dice coefficient measures overlap between predicted and ground truth segmentation</small>
            </p>
          </div>
        </section>

        {/* SURVIVAL RISK CLASSIFICATION */}
        <section className="section">
          <div className="card h-100">
            <div className="card-header-flex">
              <h3 className="section-title">Survival Risk Classification</h3>
              <span className="badge badge-secondary">Secondary Task</span>
            </div>
            <p>Survival risk prediction is a challenging secondary objective.</p>
            {/* TODO: Replace with actual survival risk classification accuracy */}
            <div className="placeholder-box mt-4">
              <span className="placeholder-note">To be updated from experiment results</span>
            </div>
          </div>
        </section>
      </div>

      <div className="grid-2 mt-4">
        {/* FEDERATED VS CENTRALIZED COMPARISON */}
        <section className="section">
          <div className="card h-100">
            <h3 className="section-title">Centralized vs. Federated Performance</h3>
            <p className="text-secondary mb-4">
              Federated learning may show a slight performance decrease compared to centralized training due to data distribution heterogeneity and communication constraints.
            </p>
            {/* TODO: Replace with actual centralized vs federated comparison values */}
            <div className="placeholder-box comparison-placeholder">
              <span className="placeholder-note">To be updated from experiment results</span>
            </div>
          </div>
        </section>

        {/* CONFUSION MATRIX PLACEHOLDER */}
        <section className="section">
          <div className="card h-100">
            <h3 className="section-title">Confusion Matrix</h3>
            {/* TODO: Replace with actual confusion matrix values */}
            <div className="confusion-matrix-grid mt-4">
              <div className="cm-cell header-cell"></div>
              <div className="cm-cell header-cell">Pred II</div>
              <div className="cm-cell header-cell">Pred III</div>
              <div className="cm-cell header-cell">Pred IV</div>
              
              <div className="cm-cell header-cell">True II</div>
              <div className="cm-cell value-cell high-val"></div>
              <div className="cm-cell value-cell low-val"></div>
              <div className="cm-cell value-cell low-val"></div>

              <div className="cm-cell header-cell">True III</div>
              <div className="cm-cell value-cell low-val"></div>
              <div className="cm-cell value-cell med-val"></div>
              <div className="cm-cell value-cell low-val"></div>

              <div className="cm-cell header-cell">True IV</div>
              <div className="cm-cell value-cell low-val"></div>
              <div className="cm-cell value-cell low-val"></div>
              <div className="cm-cell value-cell high-val"></div>
            </div>
            <p className="placeholder-note mt-4 text-center">To be populated with actual confusion matrix from model evaluation</p>
          </div>
        </section>
      </div>

      {/* PRIVACY-UTILITY SUMMARY */}
      <section className="section mt-4">
        <div className="card privacy-utility-card">
          <h3 className="section-title">Privacy Impact on Performance</h3>
          <p>Applying Differential Privacy introduces a fundamental trade-off between privacy guarantees and model utility.</p>
          <p className="mt-2 text-primary font-medium">See detailed analysis on the Privacy page →</p>
        </div>
      </section>
    </div>
  );
};

export default Results;
