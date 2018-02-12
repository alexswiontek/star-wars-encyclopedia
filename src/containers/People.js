import React, { Component } from 'react';
import Back from '../components/Back';
import Card from '../components/Card';
import Entry from '../components/Entry';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

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

  render() {
    const { apiError, people } = this.state;

    const peopleArray = people.map((person, i) => {
      return (
        <Card key={ i } name={ person[i] && person[i].name }>
          <Entry keyName="NAME" value="r2d2" />
        </Card>
      );
    });

    return (!people.length) ? (
      <div className="tc"><Spinner /></div>
    ) : (
      <div className="tc" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Back />
        { apiError && <ErrorMessage /> }
        <h1>People</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          { peopleArray }
        </div>
      </div>
    );
  }
}

export default People;
