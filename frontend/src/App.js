import React from 'react'

import Home from './pages/home/Home'

import {
  BrowserRouter as Router,
  Route,
  Routes 
} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
         <Home />
    </div>
  );
}

export default App;
