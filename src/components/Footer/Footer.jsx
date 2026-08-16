import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-title">NeuroFed Research Dashboard</span>
              <p className="footer-desc">
                Privacy-Preserving Radiomics-Based Brain Tumor Detection
                Using Fuzzy Clustering and Federated Learning
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Navigation</h4>
                <a href="/">Overview</a>
                <a href="/pipeline">Pipeline</a>
                <a href="/analysis">Analysis</a>
              </div>
              <div className="footer-col">
                <h4>More</h4>
                <a href="/federated-learning">Federated Learning</a>
                <a href="/privacy">Privacy</a>
                <a href="/results">Results</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-disclaimer">
              ⚠ Academic research prototype. Not intended for clinical diagnosis or treatment decisions.
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} · Final Year Major Project · Computer Science & Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
