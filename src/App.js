import React from 'react';
import './App.css';
import Router from './routes/Router';
import HeaderComponent from './components/common/HeaderComponent';
import FooterComponent from './components/common/FooterComponent';
import { ThemeProvider } from './context/ThemeContext';


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <HeaderComponent />
        <Router />
        <FooterComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;