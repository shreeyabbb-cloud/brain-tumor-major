import React, { useState } from 'react';
import './Analysis.css';

const Analysis = () => {
  const [modality, setModality] = useState('T1ce');
  const modalities = ['T1', 'T1ce', 'T2', 'FLAIR'];

  return (
    <div className="container analysis-container">
      <header className="analysis-header" id="analysis-header">
        <span className="section-label">DEMO INTERFACE</span>
        <h1 id="analysis-title">MRI Analysis Interface</h1>
        <p className="subtitle">Demonstration of the tumor analysis pipeline with example data</p>
        <p className="placeholder-note">Using example data for demonstration purposes only</p>
      </header>

      <div className="analysis-main-layout" id="analysis-main-layout">
        {/* LEFT COLUMN */}
        <section className="analysis-left-column" id="mri-viewer-section">
          <div className="card mri-card">
            {/* // TODO: Replace with actual MRI image loading from backend */}
            <div className="mri-placeholder" id="mri-placeholder-image">
              <div className="mri-scan-silhouette"></div>
            </div>
            
            <div className="modality-selector" id="modality-selector">
              {modalities.map(mod => (
                <button
                  key={mod}
                  className={`modality-btn ${modality === mod ? 'active' : ''}`}
                  onClick={() => setModality(mod)}
                  aria-pressed={modality === mod}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <section className="analysis-right-column" id="tumor-analysis-section">
          <div className="card analysis-results-card">
            <h2 id="tumor-analysis-title">Tumor Analysis Results</h2>
            
            <div className="analysis-group" id="predicted-grade-group">
              <h3 className="group-label">Predicted Tumor Grade</h3>
              {/* // TODO: Replace with actual model prediction */}
              <div className="badge badge-warning">Grade III - Anaplastic</div>
              <p className="placeholder-note-inline">* Example prediction only</p>
            </div>

            <div className="analysis-group" id="confidence-score-group">
              <h3 className="group-label">Confidence Score</h3>
              <div className="custom-progress-container">
                <div className="custom-progress-bar" style={{ width: '87.3%' }}></div>
                <span className="progress-text">87.3%</span>
              </div>
              <p className="placeholder-note-inline">* Example confidence score</p>
            </div>

            <div className="analysis-group" id="survival-risk-group">
              <h3 className="group-label">Survival Risk Category</h3>
              {/* // TODO: Replace with actual survival prediction */}
              <div className="badge badge-risk-moderate">Moderate Risk</div>
            </div>

            <div className="analysis-group" id="fuzzy-membership-group">
              <h3 className="group-label">Fuzzy Membership Values</h3>
              {/* // TODO: Replace with actual fuzzy membership values from FCM */}
              <p className="placeholder-note-inline">Example values for demonstration</p>
              
              <ul className="membership-list">
                <li className="membership-item">
                  <span className="member-label">Enhancing Tumor</span>
                  <div className="inline-progress">
                    <div className="inline-progress-fill" style={{ width: '82%', backgroundColor: '#EAB308' }}></div>
                  </div>
                  <span className="member-value">0.82</span>
                </li>
                <li className="membership-item">
                  <span className="member-label">Tumor Core</span>
                  <div className="inline-progress">
                    <div className="inline-progress-fill" style={{ width: '71%', backgroundColor: '#EF4444' }}></div>
                  </div>
                  <span className="member-value">0.71</span>
                </li>
                <li className="membership-item">
                  <span className="member-label">Whole Tumor</span>
                  <div className="inline-progress">
                    <div className="inline-progress-fill" style={{ width: '94%', backgroundColor: '#22C55E' }}></div>
                  </div>
                  <span className="member-value">0.94</span>
                </li>
                <li className="membership-item">
                  <span className="member-label">Background</span>
                  <div className="inline-progress">
                    <div className="inline-progress-fill" style={{ width: '12%', backgroundColor: '#64748B' }}></div>
                  </div>
                  <span className="member-value">0.12</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* BELOW COLUMNS */}
      <section className="section segmentation-section" id="segmentation-section">
        <h2 id="segmentation-title">Segmentation Visualization</h2>
        <p className="placeholder-note">Placeholder visualization — actual segmentation maps will be loaded from model output</p>
        {/* // TODO: Replace with actual segmentation visualization */}
        
        <div className="segmentation-comparison">
          <div className="card segment-box" id="ground-truth-box">
            <h3 className="segment-title">Ground Truth</h3>
            <div className="segment-placeholder">
              <div className="segment-overlay truth-overlay"></div>
            </div>
          </div>

          <div className="card segment-box" id="model-prediction-box">
            <h3 className="segment-title">Model Prediction</h3>
            <div className="segment-placeholder">
              <div className="segment-overlay pred-overlay"></div>
            </div>
          </div>
        </div>

        <div className="segmentation-legend" id="segmentation-legend">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: 'rgba(234, 179, 8, 0.6)' }}></span>
            <span>Enhancing Tumor</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: 'rgba(239, 68, 68, 0.6)' }}></span>
            <span>Tumor Core</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: 'rgba(34, 197, 94, 0.6)' }}></span>
            <span>Whole Tumor / Edema</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analysis;
