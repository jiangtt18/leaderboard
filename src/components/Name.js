import React from 'react';

const Name = ({onClick}) => (
  <button className="btn btn-primary name" name="name" onClick={(e) => onClick(e)}>Name</button>
);

export default Name;
