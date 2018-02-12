import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Films from './Films';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Logo from './Logo';
import './App.css';

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Logo />
      <Link to="/">Home</Link>
      <Link to="/films">Films</Link>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/species">Species</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/vehicles">Vehicles</Link>

      <Route exact path="/" component={ Home } />
      <Route path="/films" component={ Films } />
      <Route path="/people" component={ People } />
      <Route path="/planets" component={ Planets } />
      <Route path="/species" component={ Species } />
      <Route path="/starships" component={ Starships } />
      <Route path="/vehicles" component={ Vehicles } />


    </div>
  </Router>
);

export default App;
