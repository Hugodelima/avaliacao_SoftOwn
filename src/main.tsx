import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)