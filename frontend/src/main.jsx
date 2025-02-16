import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UrlContextProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <UrlContextProvider>
    <App />
  </UrlContextProvider>
)