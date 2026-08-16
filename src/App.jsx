import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Overview from './pages/Overview/Overview'
import Pipeline from './pages/Pipeline/Pipeline'
import Analysis from './pages/Analysis/Analysis'
import FederatedLearning from './pages/FederatedLearning/FederatedLearning'
import Privacy from './pages/Privacy/Privacy'
import Results from './pages/Results/Results'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/federated-learning" element={<FederatedLearning />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
