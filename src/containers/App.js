import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Films from './Films';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Logo from '../components/Logo';
import Back from '../components/Back';
import './App.css';

const Home = () => (
  <div id="home">
      <Link to="/films">Films</Link>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/species">Species</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/vehicles">Vehicles</Link>
  </div>
);

const Header = ({ location }) => (
  <div id="header">
    { location.pathname !== '/' && <Back /> }
    <h1 className="title inline-flex tracked-mega">{ location.pathname.replace(/\W/, '').toUpperCase() }</h1>
    <div className="hidden"><Back /></div>
  </div>
);

const ErrorPage = () => (
  <div>
    <p>Oh snap! Something bad happened. You should go home.</p>
    <div className="flex-center">
      <Link to="/" className="obvious">Home</Link>
    </div>
  </div>
);

const App = () => (
  <Router basename="star-wars-encyclopedia">
    <section>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <Logo />
      <Route path="/:title" component={ Header }/>

      <article id="main-content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/films" component={ Films } />
          <Route path="/people" component={ People } />
          <Route path="/planets" component={ Planets } />
          <Route path="/species" component={ Species } />
          <Route path="/starships" component={ Starships } />
          <Route path="/vehicles" component={ Vehicles } />
          <Route path="/404" component={ ErrorPage } />
          <Redirect from="/*" to="/404" />
        </Switch>
      </article>
    </section>
  </Router>
);

export default App;
