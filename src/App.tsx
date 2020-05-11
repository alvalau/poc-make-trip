import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
