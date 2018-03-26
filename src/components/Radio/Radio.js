import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Radio = ({ icon, value }, context) => {
  const { name, selectedValue, onChange } = context.radioGroup;
  return (
    <label className="radio">
      <input
        name={name}
        type="radio"
        onChange={onChange}
        value={value}
        checked={selectedValue === value ? true : false}/>
      <Icon type={icon} />
    </label>
  );
}

export default Radio;

Radio.contextTypes = {
  radioGroup: PropTypes.object
};

Radio.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
