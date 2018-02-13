import React, { Component } from 'react';
import Card from '../components/Card';
import Entry from '../components/Entry';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

import starship from '../media/starships/starship.png';

const starshipImg = (name) => {
  switch(name) {
    default:
      return starship;
  }
}

const StarshipsList = ({ starships }) => {
  const starshipsArray = starships.map((starship, i) => {
    return (
      <Card key={ i } name={ starship.name } img={ starshipImg(starship.name) }>
        <Entry keyName="MODEL" value={ starship.model } />
        <Entry keyName="CLASS" value={ starship.starship_class } />
        <Entry keyName="COST" value={ starship.cost_in_credits === 'unknown' ? starship.cost_in_credits : `${Number(starship.cost_in_credits).toLocaleString('en')} units` } />
        <Entry keyName="FUEL CAPACITY" value={ starship.consumables } />
        <Entry keyName="SIZE" value={ Math.round(starship.length * 3.28084).toLocaleString('en') + ' ft' } />
        <Entry keyName="CREW" value={ `${Number(starship.passengers).toLocaleString('en')} people` } />

      </Card>
    );
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      { starshipsArray }
    </div>
  );
};

class Starships extends Component {
  constructor() {
    super();
    this.state = {
      apiError: false,
      starships: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(response => response.json())
      .then(({ results }) => this.setState({ starships: results }))
      .catch(() => this.setState({ apiError: true }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }


  render() {
    const { apiError, starships, searchfield } = this.state;

    const filteredStarships = starships.filter(starship => {
      return starship.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (!starships.length) ? (
      <div className="tc"><Spinner /></div>
    ) : (
      <div>
        { apiError ? <ErrorMessage /> : (
          <div>
            <SearchBox searchChange={ this.onSearchChange } />
            <StarshipsList starships={ filteredStarships } />
          </div>
        ) }
      </div>
    );
  }
}

export default Starships;
