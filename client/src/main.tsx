import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './modules/root'

//Styles
import './styles/base.css';
import './styles/variables.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
