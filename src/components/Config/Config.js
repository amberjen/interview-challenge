import React from 'react';
import PropTypes from 'prop-types';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

const Config = (props) => {
  const { onBtnClick, onIpnutChange, value, errorMsg, formValid } = props;

  const errStyle = {
    marginLeft:'.5rem',
    position:'initial',
    top:'unset',
    left:'unset'
  };

  return (
    <form className="config">
      <input
        className={errorMsg.length > 0 ? 'error' : ''}
        type="text"
        value={value}
        maxLength={7}
        onChange={onIpnutChange} />
      <button
        type="button"
        disabled={!formValid}
        onClick={onBtnClick}>
        enter
      </button>
      <ErrorMsg msg={errorMsg} customStyle={errStyle} />
    </form>
  );
}

export default Config;

Config.propTypes = {
  onBtnClick: PropTypes.func,
  onIpnutChange: PropTypes.func,
  value: PropTypes.string
}
