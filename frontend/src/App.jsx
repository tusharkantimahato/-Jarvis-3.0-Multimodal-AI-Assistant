import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Checking API...')
  const [apiHealthy, setApiHealthy] = useState(false)

  useEffect(() => {
    fetch('/api/health')
      .then(res => {
        if (!res.ok) {
          throw new Error('Backend health check failed')
        }
        return res.json()
      })
      .then(() => {
        setApiHealthy(true)
        setStatus('✓ Connected to backend')
      })
      .catch(() => {
        setApiHealthy(false)
        setStatus('✗ Backend unreachable')
      })
  }, [])

  return (
    <div className="app">
      <div className="container">
        <h1>JARVIS 3.0</h1>
        <p className="subtitle">Multimodal AI Assistant</p>
        <div className={`status ${apiHealthy ? 'healthy' : 'unhealthy'}`}>
          {status}
        </div>
      </div>
    </div>
  )
}

export default App
