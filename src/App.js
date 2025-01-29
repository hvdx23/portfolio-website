import React from 'react';
import {Helmet } from 'react-helmet';
import './App.css';
import LandingPage from './components/LandingPage';




function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Harikrishnan Portfolio</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <LandingPage/>
    </div>
  );
}

export default App;
