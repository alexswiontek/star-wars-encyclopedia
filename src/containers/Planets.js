import React, { Component } from "react";
import Card from "../components/Card";
import Entry from "../components/Entry";
import SearchBox from "../components/SearchBox";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

import planet from "../media/planets/planet.png";

const planetImg = (name) => {
  switch (name) {
    default:
      return planet;
  }
};

const PlanetsList = ({ planets }) => {
  const planetsArray = planets.map((planet, i) => (
    <Card key={i} name={planet.name} img={planetImg(planet.name)}>
      <Entry
        keyName="POPULATION"
        value={
          planet.population === "unknown"
            ? planet.population
            : Number(planet.population).toLocaleString("en")
        }
      />
      <Entry keyName="CLIMATE" value={planet.climate} />
      <Entry keyName="TERRAIN" value={planet.terrain} />
      <Entry keyName="ORBITAL PERIOD" value={`${planet.orbital_period} days`} />
      <Entry keyName="SURFACE WATER" value={`${planet.surface_water}% water`} />
    </Card>
  ));

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {planetsArray}
    </div>
  );
};

class People extends Component {
  constructor() {
    super();
    this.state = {
      apiError: false,
      planets: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then(({ results }) => this.setState({ planets: results }))
      .catch(() => this.setState({ apiError: true }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { apiError, planets, searchfield } = this.state;

    const filteredPlanets = planets.filter((planet) =>
      planet.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return !planets.length ? (
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
            <PlanetsList planets={filteredPlanets} />
          </div>
        )}
      </div>
    );
  }
}

export default People;
