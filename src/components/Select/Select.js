import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

export default class Select extends Component {

  getChildContext() {
    const { selectedOption, onChange, valueValid  } = this.props;
    return {
      select: {
        selectedOption,
        onChange,
        valueValid
      }
    };
  }

  render() {

    const { selectedOption, onChange, errorMsg, children, isOpen, onFocus, onKeyPress } = this.props;

    return (
      <div className="select">
        <input
          className={errorMsg.length > 0 ? 'error' : ''}
          value={selectedOption}
          maxLength={1}
          onChange={onChange}
          onFocus={onFocus}
          onKeyPress={onKeyPress} />
        <ErrorMsg msg={errorMsg} />  
        { isOpen &&
            <div className="option-menu">
              {children}
            </div> }
      </div>
    );
  }
}

Select.childContextTypes = {
  select: PropTypes.object
};

Select.propTypes = {
  selectedOption: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onChange: PropTypes.func,
  errorMsg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onFocus: PropTypes.func,
  onKeyPress: PropTypes.func,
  valueValid: PropTypes.bool,
};
