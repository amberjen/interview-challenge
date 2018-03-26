import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ activeTab, children, onClick }) => {
  return (
    <div className="tabs">
      <ul className="tabs-nav">
        {children.map( child =>
          <li
            key={child.key}
            value={child.key}
            onClick={onClick}
            className={activeTab === parseInt(child.key, 10) ? 'active' : ''}>
            {child.props.label}
          </li>
        )}
      </ul>
      <div className="tabs-content">
        {children.filter( child => activeTab === parseInt(child.key, 10))}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Tabs;
