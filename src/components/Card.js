import React from 'react';
import stock from '../media/stock.png';
import './Card.css';

const Card = ({ children, name, img }) => (
  <article className="center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 flex-card">
    <div className="tc">
      <img src={img || stock} className="br-100 h3 w3 dib" alt="Stock" />
      <h1 className="f5 black-80">{name}</h1>
      <hr style={{ margin: '0 auto' }} className="tc mw3 bb bw1 b--black-10" />
    </div>
    <div className="pa2 lh-copy measure center f6 black-70">{children}</div>
  </article>
);

export default Card;
