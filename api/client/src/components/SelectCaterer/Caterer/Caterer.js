import React from 'react';

const caterer = (props) => (
  <div>
    <a href={props.link}>
      <img src={props.imageLink} alt={props.alt} />
      <p>{props.children}</p>
      <p><small>delivery time</small>{props.time}</p>
    </a>
  </div>
);

export default caterer;

