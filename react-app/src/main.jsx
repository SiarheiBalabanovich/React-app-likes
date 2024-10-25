import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);
createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
