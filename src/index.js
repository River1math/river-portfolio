import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext';
import GlobalAlert from './components/Alert';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript />
      <AlertProvider>
        <GlobalAlert />
        <App />
      </AlertProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
