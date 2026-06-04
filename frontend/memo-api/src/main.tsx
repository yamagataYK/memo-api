import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CreateMemo from './pages/CreateMemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <CreateMemo />
  </StrictMode>,
)
