import React, { Component } from 'react';
import Movie from '../components/Movie';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

import one from '../media/films/1.jpeg';
import two from '../media/films/2.jpeg';
import three from '../media/films/3.jpeg';
import four from '../media/films/4.jpeg';
import five from '../media/films/5.jpeg';
import six from '../media/films/6.jpeg';
import seven from '../media/films/7.jpeg';
import stock from '../media/stock.png';

const filmImg = episode_id => {
  switch (episode_id) {
    case 1:
      return one;
    case 2:
      return two;
    case 3:
      return three;
    case 4:
      return four;
    case 5:
      return five;
    case 6:
      return six;
    case 7:
      return seven;
    default:
      return stock;
  }
};

const FilmList = ({ films }) => {
  const filmsArray = films
    .map((film, i) => {
      film.formatted_title = `Episode ${film.episode_id}: ${film.title}`;
      return (
        <Movie
          key={film.episode_id}
          description={film.opening_crawl
            .replace(/^[\r]$/, ' ')
            .replace(/^[\n]$/, '')}
          img={filmImg(film.episode_id)}
          title={`${film.formatted_title} (${film.release_date.slice(0, 4)})`}
        />
      );
    })
    .sort((a, b) => a.key - b.key);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {filmsArray}
    </div>
  );
};

class Film extends Component {
  constructor() {
    super();
    this.state = {
      apiError: false,
      films: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(({ results }) => this.setState({ films: results }))
      .catch(() => this.setState({ apiError: true }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { apiError, films, searchfield } = this.state;

    const filteredFilms = films.filter(
      film =>
        film.formatted_title
          ? film.formatted_title
              .toLowerCase()
              .includes(searchfield.toLowerCase())
          : film.title.toLowerCase().includes(searchfield.toLowerCase()),
    );

    return !films.length ? (
      <div className="tc">
        <Spinner />
      </div>
    ) : (
      <div>
        {apiError ? (
          <ErrorMessage />
        ) : (
          <div>
            <SearchBox
              searchChange={this.onSearchChange}
              placeholder="Enter the title or episode number"
            />
            <FilmList films={filteredFilms} />
          </div>
        )}
      </div>
    );
  }
}

export default Film;
