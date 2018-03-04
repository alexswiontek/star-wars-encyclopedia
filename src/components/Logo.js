import React from 'react';
import star from '../media/star.svg';
import wars from '../media/wars.svg';
import './Logo.css';

const Logo = () => (
  <section className="flex-parent">
    <div className="starwars-demo">
      <img src={star} alt="Star" className="star" />
      <img src={wars} alt="Wars" className="wars" />
      <h2 className="byline" id="byline">
        Universe Encyclopedia
      </h2>
    </div>
  </section>
);

export default Logo;
