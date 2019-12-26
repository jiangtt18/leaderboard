import React from 'react';

const Rank = ({onClick}) => (
  <button className="btn btn-primary rank" name="rank" onClick={(e) => onClick(e)}>Rank</button>
);

export default Rank;
