import React, { Component } from 'react';
import Card from '../components/Card';
import Entry from '../components/Entry';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

import stock from '../media/stock.png';

const speciesImg = name => {
  switch (name) {
    default:
      return stock;
  }
};

const SpeciesList = ({ species }) => {
  const speciesArray = species.map((type, i) => (
    <Card key={i} name={type.name} img={speciesImg(type.name)}>
      <Entry keyName="CLASSIFICATION" value={type.classification} />
      <Entry keyName="DESIGNATION" value={type.designation} />
      <Entry keyName="LANGUAGE" value={type.language} />
      <Entry
        keyName="AVERAGE HEIGHT"
        value={`${(type.average_height * 0.0328084).toFixed(1)} ft`}
      />
      <Entry
        keyName="AVERAGE LIFESPAN"
        value={`${type.average_lifespan} years`}
      />
    </Card>
  ));

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {speciesArray}
    </div>
  );
};

class Species extends Component {
  constructor() {
    super();
    this.state = {
      apiError: false,
      species: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/species/')
      .then(response => response.json())
      .then(({ results }) => this.setState({ species: results }))
      .catch(() => this.setState({ apiError: true }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { apiError, species, searchfield } = this.state;

    const filteredSpecies = species.filter(type =>
      type.name.toLowerCase().includes(searchfield.toLowerCase()),
    );

    return !species.length ? (
      <div className="tc">
        <Spinner />
      </div>
    ) : (
      <div>
        {apiError ? (
          <ErrorMessage />
        ) : (
          <div>
            <SearchBox searchChange={this.onSearchChange} />
            <SpeciesList species={filteredSpecies} />
          </div>
        )}
      </div>
    );
  }
}

export default Species;
