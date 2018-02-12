import React from 'react';
import star from './star.svg';
import wars from './wars.svg';
import './Logo.css';

const Logo = () => (
  <div className="starwars-demo">
    <img src={ star } alt="Star" className="star" />
    <img src={ wars } alt="Wars" className="wars" />
    <h2 className="byline" id="byline">Universe Encyclopedia</h2>
  </div>
);

export default Logo;
