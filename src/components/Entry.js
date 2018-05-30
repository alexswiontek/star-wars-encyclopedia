import React from 'react';

const Entry = ({ keyName, value }) => (
  <p
    style={{
      letterSpacing: '0.06em',
      fontSize: '1.1em',
      textAlign: 'left',
      padding: '5px',
    }}
  >
    <span>{keyName}</span>
    <span>: </span>
    <span style={{ color: '#426be8' }}>{value}</span>
  </p>
);

export default Entry;
