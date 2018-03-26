import React from 'react';
import PropTypes from 'prop-types';

const TabPane = ({children}) => {
  return (
    <div>{children}</div>
  );
};

export default TabPane;

TabPane.propTypes = {
  children: PropTypes.node.isRequired,
}
