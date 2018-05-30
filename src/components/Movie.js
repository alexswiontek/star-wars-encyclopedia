import React from 'react';
import { Card } from 'primereact/components/card/Card';
import './Movie.css';

const Header = ({ img, title }) => (
  <img
    alt={ title }
    src={ img }
  />
);

const Movie = ({ description, img, title, year }) => (
  <Card
    title={ title }
    subtitle={ year }
    style={{ width: '360px' }}
    className="ui-card-shadow flex-movie"
    header={ <Header img={ img } title={ title } /> }
  >
    <div>
      { description }
    </div>
  </Card>
);

export default Movie;
