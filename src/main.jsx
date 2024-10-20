import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { SWRConfig } from 'swr';
import App from './App.jsx';
import './index.css';

const baseUrl = 'https://react-tutorial-demo.firebaseio.com/';

const fetcher = (url) => fetch(baseUrl + url).then((response) => response.json());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </StrictMode>
);
