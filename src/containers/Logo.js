import React from 'react';
import './Logo.css';

const Logo = () => (
  <div className="starwars-demo">
    <img src="https://cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" />
    <img src="https://cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
    <h2 className="byline" id="byline">Universe Encyclopedia</h2>
  </div>
);

export default Logo;
