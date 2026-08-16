import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview-container">
      {/* HERO SECTION */}
      <section className="page-hero section" id="hero">
        <div className="container">
          <div className="hero-content">
            <span className="section-label">Research Prototype</span>
            <h1 className="hero-title">Privacy-Preserving Radiomics-Based Brain Tumor Detection</h1>
            <p className="hero-subtitle">Using Fuzzy Clustering and Federated Learning</p>
            <p className="hero-description">
              This dashboard presents an academic research prototype exploring the feasibility of using collaborative 
              federated learning and advanced fuzzy clustering techniques for brain tumor detection without the need 
              to centralize sensitive medical imaging data.
            </p>
            <div className="hero-disclaimer">
              <em>Academic research prototype. Not intended for clinical diagnosis or treatment decisions.</em>
            </div>
          </div>

          <div className="why-privacy">
            <h2 className="why-title">Why Privacy-Preserving Medical AI?</h2>
            <div className="reason-cards">
              <div className="card reason-card">
                <div className="reason-icon">🔒</div>
                <h3>Patient Data Privacy</h3>
                <p>Medical imaging data contains sensitive patient information that must be protected from unauthorized access or exposure during the model training process.</p>
              </div>
              <div className="card reason-card">
                <div className="reason-icon">⚖️</div>
                <h3>Regulatory Compliance</h3>
                <p>Healthcare data is subject to strict legal frameworks (e.g., HIPAA, GDPR) that restrict data sharing and cross-border data transfers.</p>
              </div>
              <div className="card reason-card">
                <div className="reason-icon">🌐</div>
                <h3>Collaborative Learning</h3>
                <p>Enables multi-institutional research and model development by sharing only model parameters or updates, without centralizing the raw data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE VISUALIZATION */}
      <section className="pipeline-section section" id="pipeline">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Research Workflow Pipeline</h2>
            <p className="section-description">A visual representation of the proposed methodology from data ingestion to evaluation.</p>
          </div>
          
          <div className="pipeline-visual">
            <div className="pipeline-step">
              <div className="step-card card-elevated">
                <span className="step-icon">🧠</span>
                <div className="step-content">
                  <h4>1. MRI Data</h4>
                  <p>Initial multi-modal Magnetic Resonance Imaging data acquisition at distributed local institutions.</p>
                </div>
              </div>
            </div>
            
            <div className="pipeline-connector">↓</div>

            <div className="pipeline-step">
              <div className="step-card card-elevated">
                <span className="step-icon">⚙️</span>
                <div className="step-content">
                  <h4>2. Preprocessing</h4>
                  <p>Standardization, skull-stripping, and noise reduction of the medical images.</p>
                </div>
              </div>
            </div>

            <div className="pipeline-connector">↓</div>

            <div className="pipeline-step">
              <div className="step-card card-elevated">
                <span className="step-icon">📊</span>
                <div className="step-content">
                  <h4>3. Radiomics Extraction</h4>
                  <p>Extraction of quantitative features (shape, texture, intensity) from regions of interest.</p>
                </div>
              </div>
            </div>

            <div className="pipeline-connector">↓</div>

            <div className="pipeline-step">
              <div className="step-card card-elevated">
                <span className="step-icon">🎯</span>
                <div className="step-content">
                  <h4>4. Fuzzy C-Means</h4>
                  <p>Application of fuzzy clustering to handle uncertainty and overlapping tissue boundaries in tumor segmentation.</p>
                </div>
              </div>
            </div>

            <div className="pipeline-connector">↓</div>

            <div className="pipeline-step">
              <div className="step-card card-elevated">
                <span className="step-icon">💻</span>
                <div className="step-content">
                  <h4>5. Federated Clients</h4>
                  <p>Local model training using the extracted features at each independent participating institution.</p>
                </div>
              </div>
            </div>

            <div className="pipeline-connector">↓</div>

            <div className="pipeline-step">
              <div className="step-card card-elevated">
                <span className="step-icon">🔄</span>
                <div className="step-content">
                  <h4>6. Federated Learning</h4>
                  <p>Aggregation of local model updates at a central server to construct a global model without raw data exchange.</p>
                </div>
              </div>
            </div>

            <div className="pipeline-connector">↓</div>

            <div className="pipeline-step">
              <div className="step-card card-elevated">
                <span className="step-icon">🛡️</span>
                <div className="step-content">
                  <h4>7. Privacy / Differential Privacy</h4>
                  <p>Integration of noise mechanisms to protect against membership inference and data reconstruction attacks.</p>
                </div>
              </div>
            </div>

            <div className="pipeline-connector">↓</div>

            <div className="pipeline-step">
              <div className="step-card card-elevated">
                <span className="step-icon">📈</span>
                <div className="step-content">
                  <h4>8. Prediction & Evaluation</h4>
                  <p>Final tumor detection inference and assessment of model performance and robustness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT/METHODOLOGY SECTION */}
      <section className="methodology-section section" id="methodology">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Methodology & Research Objectives</h2>
            <p className="objective-statement">
              <strong>Objective:</strong> To investigate whether radiomics-based brain tumor analysis can be performed collaboratively across distributed institutions while reducing direct exposure of patient data.
            </p>
          </div>

          <div className="methodology-grid">
            <div className="card methodology-card">
              <h3>Problem</h3>
              <p>
                Developing robust AI models for medical image analysis requires large, diverse datasets. However, centralizing medical data is often unfeasible due to strict privacy regulations, ethical concerns, and the competitive nature of healthcare institutions.
              </p>
            </div>
            <div className="card methodology-card">
              <h3>Proposed Approach</h3>
              <p>
                This project proposes a federated learning architecture where institutions train models locally using radiomic features extracted via Fuzzy C-Means clustering. Only model parameters are shared and aggregated centrally, preserving patient confidentiality.
              </p>
            </div>
            <div className="card methodology-card">
              <h3>Key Components</h3>
              <ul>
                <li><strong>Radiomics:</strong> High-throughput extraction of quantitative imaging features.</li>
                <li><strong>Fuzzy C-Means:</strong> Soft clustering for accurate tumor boundary delineation.</li>
                <li><strong>Federated Architecture:</strong> Decentralized learning to ensure data privacy.</li>
                <li><strong>Differential Privacy:</strong> Added security layer against parameter-based attacks.</li>
              </ul>
            </div>
            <div className="card methodology-card">
              <h3>Limitations</h3>
              <p>
                As a research prototype, this system is not validated for clinical use. Challenges remain regarding network communication overhead, handling heterogeneous data distributions (non-IID) across sites, and balancing privacy budgets with model utility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
