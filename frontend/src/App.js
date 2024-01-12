import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './components/AppContext';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Chat from './pages/Chat';


function App() {

  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Routes>
            <Route path='/' Component={Main} />
            <Route path='/Chat' Component={Chat} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
