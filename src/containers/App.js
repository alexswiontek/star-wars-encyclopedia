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
    <ul>
      <li><Link to="/films">Films</Link></li>
      <li><Link to="/people">People</Link></li>
      <li><Link to="/planets">Planets</Link></li>
      <li><Link to="/species">Species</Link></li>
      <li><Link to="/starships">Starships</Link></li>
      <li><Link to="/vehicles">Vehicles</Link></li>
    </ul>
  </div>
);

const App = () => (
  <Router>
    <section>
      <Link to="/">
        <Logo />
      </Link>

      <article id="main-content">
        { console.log(Route) }


        <Route exact path="/" component={ Home } />
        <Route path="/films" component={ Films } />
        <Route path="/people" component={ People } />
        <Route path="/planets" component={ Planets } />
        <Route path="/species" component={ Species } />
        <Route path="/starships" component={ Starships } />
        <Route path="/vehicles" component={ Vehicles } />
      </article>
    </section>
  </Router>
);

export default App;
