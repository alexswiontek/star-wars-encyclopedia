import React, { Component } from 'react';
import Card from '../components/Card';
import Entry from '../components/Entry';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

import luke from '../media/people/luke.png';
import c3po from '../media/people/c-3po.png';
import r2d2 from '../media/people/r2d2.png';
import vader from '../media/people/vader.png';
import leia from '../media/people/leia.png';
import obiwan from '../media/people/obi-wan.png';
import owen from '../media/people/owen.png';
import beru from '../media/people/beru.png';
import r5d4 from '../media/people/r5d4.png';
import biggs from '../media/people/biggs.png';
import stock from '../media/stock.png';

const characterImg = name => {
  switch (name) {
    case 'Luke Skywalker':
      return luke;
    case 'C-3PO':
      return c3po;
    case 'R2-D2':
      return r2d2;
    case 'Darth Vader':
      return vader;
    case 'Leia Organa':
      return leia;
    case 'Obi-Wan Kenobi':
      return obiwan;
    case 'Owen Lars':
      return owen;
    case 'Beru Whitesun lars':
      return beru;
    case 'R5-D4':
      return r5d4;
    case 'Biggs Darklighter':
      return biggs;
    default:
      return stock;
  }
};

const PeopleList = ({ people }) => {
  const peopleArray = people.map((person, i) => (
    <Card key={i} name={person.name} img={characterImg(person.name)}>
      <Entry keyName="BIRTH YEAR" value={person.birth_year} />
      <Entry
        keyName="HEIGHT"
        value={`${(person.height * 0.0328084).toFixed(1)} ft`}
      />
      <Entry
        keyName="WEIGHT"
        value={`${Math.round(person.mass * 2.20462)} lbs`}
      />
      <Entry keyName="GENDER" value={person.gender} />
    </Card>
  ));

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {peopleArray}
    </div>
  );
};

class People extends Component {
  constructor() {
    super();
    this.state = {
      apiError: false,
      people: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(({ results }) => this.setState({ people: results }))
      .catch(() => this.setState({ apiError: true }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { apiError, people, searchfield } = this.state;

    const filteredPeople = people.filter(person =>
      person.name.toLowerCase().includes(searchfield.toLowerCase()),
    );

    return !people.length ? (
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
            <PeopleList people={filteredPeople} />
          </div>
        )}
      </div>
    );
  }
}

export default People;
