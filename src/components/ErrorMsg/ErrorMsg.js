import React from 'react';
import PropTypes from 'prop-types';

const ErrorMsg = ({msg, customStyle}) => {
  return (
    <div className="error-msg" style={customStyle}>{msg}</div>
  );
}

export default ErrorMsg;

ErrorMsg.propTypes = {
  msg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
}
