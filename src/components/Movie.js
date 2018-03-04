import React from 'react';
import './Movie.css';

const Movie = ({ description, img, title }) => (
  <article className="flex-movie">
    <img className="movie-img" src={img} alt={title} />
    <h4 className="black underline tc">{title}</h4>
    <p className="tracked-ns black description">{description}</p>
  </article>
);

export default Movie;
