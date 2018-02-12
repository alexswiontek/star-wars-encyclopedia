import React from 'react';
import stock from '../media/stock.png';

const Card = ({ children, name }) => (
  <article className="mw5 center bg-moon-gray br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      <img src={ stock } className="br-100 h3 w3 dib" alt="Stock" />
      <h1 className="f4 black-80">{ name }</h1>
      <hr className="mw3 bb bw1 b--black-10" />
    </div>
    <div className="lh-copy measure center f6 black-70">
      { children }
    </div>
  </article>
);

export default Card;
