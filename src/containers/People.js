import React, { Component } from 'react';
import Back from '../components/Back';
import Card from '../components/Card';
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
    const { apiError } = this.state;

    return (
      <div className="tc" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Back />
        { apiError && <ErrorMessage /> }
        <h1>People</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Card name="R2D2">
            <ul className="tl" style={{ fontSize: '0.8em' }}>
              <li>1: djhdhjdhj</li>
              <li>2: dhdhdh</li>
              <li>3: djhhjdhjd</li>
              <li>4: dhdjhdhj</li>
            </ul>
          </Card>
          <Card name="Not R2D2">
            <ul className="tl" style={{ fontSize: '0.8em' }}>
              <li>1: djhdhjdhj</li>
              <li>2: dhdhdh</li>
              <li>3: djhhjdhjd</li>
              <li>4: dhdjhdhj</li>
            </ul>
          </Card>
          <Card name="Maybe R2D2">
            <ul className="tl" style={{ fontSize: '0.8em' }}>
              <li>1: djhdhjdhj</li>
              <li>2: dhdhdh</li>
              <li>3: djhhjdhjd</li>
              <li>4: dhdjhdhj</li>
            </ul>
          </Card>
        </div>
      </div>
    );
  }
}

export default People;
