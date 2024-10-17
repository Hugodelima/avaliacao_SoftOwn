import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './components/Header.tsx'
import ImageAndText from './components/ImageAndText.tsx'

import './styles/index.css'

import third from './assets/third.png'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <ImageAndText imageComponent={third} direction={''} title={''} description={''} listMarcation={[]} />
  </StrictMode>,
)