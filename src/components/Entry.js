import React from 'react';

const Entry = ({ keyName, value }) => (
  <p style={{fontFamily: 'Verdana', fontWeight: 'bold' }}>
    <span>{ keyName }</span>
    <span>{ `: ` }</span>
    <span style={{ color: '#fdf253' }}>{ value }</span>
  </p>
);

export default Entry;
