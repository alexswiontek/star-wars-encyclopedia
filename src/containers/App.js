import React, { Component } from 'react';
import Spinner from '../components/Spinner';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
        apiError: false,
        items: [],
        searchfield: ''
      };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(({results}) => this.setState({ items: results, apiError: false }))
      .catch(err => this.setState({ apiError: true }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { apiError, items } = this.state;

    return (
      <div>
        { apiError && <h1>Sorry, there was an error reaching the API :(</h1> }
        { !items.length ? (
          <div className="tc">
            <h3>Star Wars Loading...</h3>
            <Spinner />
          </div>
        ) : (
          <div className="tc">
            <h1 className="f1 dim yellow">Star Wars!</h1>
            <SearchBox searchChange={ this.onSearchChange } />
          </div>
        ) }
      </div>
    );
  }
}

export default App;
