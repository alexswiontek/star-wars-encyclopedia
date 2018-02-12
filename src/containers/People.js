import React from 'react';
import Back from '../components/Back';
import Card from '../components/Card';

const People = () => (
  <div className="tc" style={{ maxWidth: '1000px', margin: '0 auto' }}>
    <Back />
    <h1>People</h1>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card name="R2D2">
        <ul>
          <li>1: djhdhjdhj</li>
          <li>2: dhdhdh</li>
          <li>3: djhhjdhjd</li>
          <li>4: dhdjhdhj</li>
        </ul>
      </Card>
      <Card name="Not R2D2">
        <ul>
          <li>1: djhdhjdhj</li>
          <li>2: dhdhdh</li>
          <li>3: djhhjdhjd</li>
          <li>4: dhdjhdhj</li>
        </ul>
      </Card>
      <Card name="Maybe R2D2">
        <ul>
          <li>1: djhdhjdhj</li>
          <li>2: dhdhdh</li>
          <li>3: djhhjdhjd</li>
          <li>4: dhdjhdhj</li>
        </ul>
      </Card>
    </div>
  </div>
);

export default People;
