import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WalletProvider } from './components/WalletProvider';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </StrictMode>
);