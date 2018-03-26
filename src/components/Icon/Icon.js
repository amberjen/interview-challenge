import React from 'react';

const Icon = (props) => {
  return <div className={`icon ${props.type}`} style={props.style} data-value={props.dataValue} />
}

export default Icon;
