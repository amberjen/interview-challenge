import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ children, value, onClick }, context) => {
  const { selectedOption, valueValid } = context.select;
  return (
    <div
      onClick={onClick}
      className={ valueValid && selectedOption === value ? 'option selected' : 'option' }>
      {children}
    </div>
  );
}

export default Option;

Option.contextTypes = {
  select: PropTypes.object
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func
};
