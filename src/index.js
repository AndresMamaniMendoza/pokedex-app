import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './redux/configureStore';
import { ThemeProvider } from './context/ThemeContext';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReduxProvider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </React.StrictMode>
    </ReduxProvider>
);