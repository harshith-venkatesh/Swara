import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import callMockServer from './server/mock-server'
import { VideoProvider } from './context/VideoContext'
callMockServer()
ReactDOM.render(
  <StrictMode>
    <Router>
      <VideoProvider>
        <App />
      </VideoProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
)
