import React from 'react';
import { Link } from 'react-router-dom';
import './Back.css';

const Back = () => (
  <Link
    to="/"
    className="back f5 no-underline light-silver bg-animate hover-near-white inline-flex items-center ba border-box ma2 tc br2 pa2"
  >
    <svg className="w1" dataicon="chevronLeft" viewBox="0 0 32 32">
      <title>chevronLeft icon</title>
      <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
    </svg>
    <span className="pl1">Previous</span>
  </Link>
);

export default Back;
