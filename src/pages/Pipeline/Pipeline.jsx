import React from 'react';
import './Pipeline.css';

const Pipeline = () => {
  return (
    <div className="pipeline-page container">
      <header className="pipeline-header">
        <span className="section-label">METHODOLOGY</span>
        <h1 className="pipeline-title">Research Pipeline</h1>
        <p className="pipeline-subtitle">
          End-to-end workflow from MRI acquisition to privacy-preserving prediction
        </p>
      </header>

      <div className="pipeline-timeline">
        
        {/* Section 1: MRI Data */}
        <section className="pipeline-section card" id="stage-mri">
          <div className="pipeline-content layout-left">
            <div className="pipeline-text">
              <div className="pipeline-badge">01</div>
              <h2>MRI Data Acquisition</h2>
              <div className="what-happens">
                <h3>What happens?</h3>
                <p>
                  Multimodal Magnetic Resonance Imaging (MRI) scans are acquired and preprocessed. 
                  Using multiple modalities provides complementary tissue contrasts, allowing the model 
                  to better differentiate between tumor core, enhancing tumor, and peritumoral edema.
                </p>
              </div>
              
              <div className="technical-details">
                <div className="detail-tag">Dataset: BraTS2020</div>
                <div className="detail-tag">Multimodal Input</div>
                <div className="detail-tag">3D Volumetric Data</div>
              </div>
            </div>
            
            <div className="pipeline-visual">
              <div className="modality-grid">
                <div className="modality-box t1">
                  <span>T1</span>
                  <small>Native</small>
                </div>
                <div className="modality-box t1ce">
                  <span>T1ce</span>
                  <small>Contrast</small>
                </div>
                <div className="modality-box t2">
                  <span>T2</span>
                  <small>T2-weighted</small>
                </div>
                <div className="modality-box flair">
                  <span>FLAIR</span>
                  <small>Fluid Atten.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Radiomics */}
        <section className="pipeline-section card" id="stage-radiomics">
          <div className="pipeline-content layout-right">
            <div className="pipeline-text">
              <div className="pipeline-badge">02</div>
              <h2>Radiomics Feature Extraction</h2>
              <div className="what-happens">
                <h3>What happens?</h3>
                <p>
                  Radiomics converts digital medical images into mineable high-dimensional data. 
                  We mathematically extract quantitative features from the MRI scans that capture 
                  subtle tumor characteristics often imperceptible to the human eye.
                </p>
              </div>
              
              <div className="technical-details">
                <div className="detail-tag">First-order features (Statistics)</div>
                <div className="detail-tag">Shape features (Geometry)</div>
                <div className="detail-tag">Texture features (GLCM/GLRLM)</div>
              </div>
            </div>
            
            <div className="pipeline-visual radiomics-visual">
              <div className="feature-nodes">
                <div className="node center-node">Image Region</div>
                <div className="node branch-node b1">Intensity</div>
                <div className="node branch-node b2">Shape</div>
                <div className="node branch-node b3">Texture</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Fuzzy Clustering */}
        <section className="pipeline-section card" id="stage-clustering">
          <div className="pipeline-content layout-left">
            <div className="pipeline-text">
              <div className="pipeline-badge">03</div>
              <h2>Fuzzy Clustering</h2>
              <div className="what-happens">
                <h3>What happens?</h3>
                <p>
                  Unlike hard clustering, fuzzy clustering allows each data point to belong to multiple 
                  clusters with varying membership degrees, which better represents the ambiguous 
                  boundaries often found in brain tumor regions.
                </p>
              </div>
              
              <div className="technical-details">
                <div className="detail-tag">Algorithm: Fuzzy C-Means</div>
                <div className="detail-tag">Soft Membership</div>
                <div className="detail-tag">Spatial Regularization</div>
              </div>
            </div>
            
            <div className="pipeline-visual clustering-visual">
              <div className="cluster-diagram">
                <div className="cluster-circle c1"></div>
                <div className="cluster-circle c2"></div>
                <div className="cluster-overlap">Soft Boundary</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Federated Learning */}
        <section className="pipeline-section card" id="stage-federated">
          <div className="pipeline-content layout-right">
            <div className="pipeline-text">
              <div className="pipeline-badge">04</div>
              <h2>Federated Learning</h2>
              <div className="what-happens">
                <h3>What happens?</h3>
                <p>
                  We simulate multiple institutional clients collaborating to train a shared global model 
                  without sharing their local private MRI data. Only model parameters (weights/gradients) 
                  are transmitted to the central server for aggregation.
                </p>
              </div>
              
              <div className="technical-details">
                <div className="detail-tag">Distributed Training</div>
                <div className="detail-tag">FedAvg Aggregation</div>
                <div className="detail-tag">Non-IID Distribution</div>
              </div>
            </div>
            
            <div className="pipeline-visual federated-visual">
              <div className="fl-diagram">
                <div className="fl-server">Global Model</div>
                <div className="fl-clients">
                  <div className="fl-client">Client A</div>
                  <div className="fl-client">Client B</div>
                  <div className="fl-client">Client C</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Differential Privacy */}
        <section className="pipeline-section card" id="stage-privacy">
          <div className="pipeline-content layout-left">
            <div className="pipeline-text">
              <div className="pipeline-badge">05</div>
              <h2>Differential Privacy</h2>
              <div className="what-happens">
                <h3>What happens?</h3>
                <p>
                  To prevent the central server or adversaries from reverse-engineering patient data 
                  from the model updates, we inject calibrated mathematical noise during the training 
                  process, ensuring strong theoretical privacy guarantees.
                </p>
              </div>
              
              <div className="technical-details">
                <div className="detail-tag">Gaussian Mechanism</div>
                <div className="detail-tag">Privacy Budget (ε)</div>
                <div className="detail-tag">Privacy–Utility Trade-off</div>
              </div>
            </div>
            
            <div className="pipeline-visual privacy-visual">
              <div className="noise-diagram">
                <div className="clean-signal">Original Update</div>
                <div className="plus-sign">+</div>
                <div className="noise-signal">Gaussian Noise</div>
                <div className="equals-sign">=</div>
                <div className="private-signal">Private Update</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Pipeline;
