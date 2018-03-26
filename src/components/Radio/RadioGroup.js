import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RadioGroup extends Component {

  getChildContext() {
    const { name, selectedValue, onChange } = this.props;
    return {
      radioGroup: {
        name,
        selectedValue,
        onChange
      }
    };
  }

  render() {
    const { name, children, onChange, selectedValue, ...rest } = this.props;
    return (
      <div className="radio-group" name={name} {...rest}>
        {children}
      </div>
    );
  }
}

RadioGroup.childContextTypes = {
  radioGroup: PropTypes.object
};

RadioGroup.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
};
