import React from 'react';

const Age = ({onClick}) => (
  <button className="btn btn-primary age" name="age" onClick={(e) => onClick(e)}>Age</button>
);

export default Age;
