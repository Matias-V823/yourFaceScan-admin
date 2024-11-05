import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router'; // Cambiado a mayúscula
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter /> 
  </StrictMode>
);
