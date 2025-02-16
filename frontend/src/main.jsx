import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UrlContextProvider } from './context/context.jsx'
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UrlContextProvider>
      <App />
    </UrlContextProvider>
  </BrowserRouter>
)