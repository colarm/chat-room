import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Main} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
