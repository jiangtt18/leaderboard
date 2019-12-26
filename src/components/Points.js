import React from 'react';

const Points = ({onClick}) => (
  <button className="btn btn-primary points" name="points" onClick={(e) => onClick(e)}>Points</button>
);

export default Points;
