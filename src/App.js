import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.png'
import './App.css';

import Home from './home';
import Order from './order';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Router>
        <nav id="nav" className="flex nav">
          <h1><Link to="/"><img className="logo" src={logo} alt="logo" /></Link></h1>
          <ul className="flex">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>       
        </nav>
        <div className="viewport">
          <Switch>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/order">
              <Order/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
