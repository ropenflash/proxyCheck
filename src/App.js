import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <div className="App">
      Home
      <Router>
        <nav>
          <ul>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/about">about</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
