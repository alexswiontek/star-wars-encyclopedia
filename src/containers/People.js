import React, { Component } from 'react';
import Back from '../components/Back';
import Card from '../components/Card';
import Entry from '../components/Entry';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

const PeopleList = ({ people }) => {
  const peopleArray = people.map((person, i) => {
    return (
      <Card key={ i } name={ person.name }>
        <Entry keyName="BIRTH YEAR" value={ person.birth_year } />
        <Entry keyName="HEIGHT" value={ (person.height * 0.0328084).toFixed(1) + ' ft' } />
        <Entry keyName="WEIGHT" value={ Math.round(person.mass * 2.20462) + ' lbs' } />
        <Entry keyName="GENDER" value={ person.gender } />
      </Card>
    );
  });
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      { peopleArray }
    </div>
  );
};

class People extends Component {
  constructor() {
    super();
    this.state = {
      apiError: false,
      people: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(({ results }) => this.setState({ people: results }))
      .catch(() => this.setState({ apiError: true }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }


  render() {
    const { apiError, people } = this.state;

    return (!people.length) ? (
      <div className="tc"><Spinner /></div>
    ) : (
      <div className="tc" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Back />
        <h1>People</h1>
        { apiError && <ErrorMessage /> }
        <PeopleList people={ people } />
      </div>
    );
  }
}

export default People;
