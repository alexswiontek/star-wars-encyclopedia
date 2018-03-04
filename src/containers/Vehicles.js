import React, { Component } from 'react';
import Card from '../components/Card';
import Entry from '../components/Entry';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

import vehicle from '../media/vehicles/vehicle.png';

const vehicleImg = name => {
  switch (name) {
    default:
      return vehicle;
  }
};

const VehicleList = ({ vehicles }) => {
  const vehiclesArray = vehicles.map((vehicle, i) => (
    <Card key={i} name={vehicle.name} img={vehicleImg(vehicle.name)}>
      <Entry keyName="MODEL" value={vehicle.model} />
      <Entry keyName="CLASS" value={vehicle.vehicle_class} />
      <Entry
        keyName="COST"
        value={
          vehicle.cost_in_credits === 'unknown'
            ? vehicle.cost_in_credits
            : `${Number(vehicle.cost_in_credits).toLocaleString('en')} units`
        }
      />
      <Entry keyName="FUEL CAPACITY" value={vehicle.consumables} />
      <Entry
        keyName="SIZE"
        value={`${Math.round(vehicle.length * 3.28084).toLocaleString(
          'en',
        )} ft`}
      />
      <Entry
        keyName="CREW"
        value={`${Number(vehicle.crew).toLocaleString('en')} ${
          vehicle.crew === '1' ? 'person' : 'people'
        }`}
      />
      <Entry
        keyName="PASSENGERS"
        value={`${Number(vehicle.passengers).toLocaleString('en')} ${
          vehicle.passengers === '1' ? 'person' : 'people'
        }`}
      />
    </Card>
  ));

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {vehiclesArray}
    </div>
  );
};

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {
      apiError: false,
      vehicles: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/')
      .then(response => response.json())
      .then(({ results }) => this.setState({ vehicles: results }))
      .catch(() => this.setState({ apiError: true }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { apiError, vehicles, searchfield } = this.state;

    const filteredVehicles = vehicles.filter(vehicles =>
      vehicles.name.toLowerCase().includes(searchfield.toLowerCase()),
    );

    return !vehicles.length ? (
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
            <VehicleList vehicles={filteredVehicles} />
          </div>
        )}
      </div>
    );
  }
}

export default Vehicles;
