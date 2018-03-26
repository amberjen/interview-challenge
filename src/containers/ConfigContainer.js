import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetCount, updateIconDisplay } from '../actions';
import Config from '../components/Config/Config';

class ConfigContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submittedValueArray: '',
      formErrors: '',
      formValid: false
    }

    this.validateField = this.validateField.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearInputField = this.clearInputField.bind(this);
  }

  validateField(value) {
    let { formErrors, formValid, submittedValueArray } = this.state;
    let errMsg = formErrors;

    if (value.length === 0 ) {
      errMsg = '請輸入參數';
      formValid = false;
    } else if (value.match(/[a-zA-Z]/)) {
      errMsg = '參數不可含有英文'
      formValid = false;
    } else if (value.match(/[\u4E00-\u9FFF]/)) {
      errMsg = '參數不可含有中文'
      formValid = false;
    } else if (value.match(/0|[5-9]/) || value.match(/[1-4]{2,}/)) {
      errMsg = '只可輸入 1-4';
      formValid = false;
    } else if (value.length > 1 && value.indexOf(',') === -1) {
      errMsg = '請使用逗號(,)分隔參數';
      formValid = false;
    } else if (value.split(',').indexOf('') !== -1) {
      errMsg = '請輸入正確格式 Eg. 1,2,3,4';
      formValid = false;
    } else if (value.match(/,{1},{1,3}/)) {
      errMsg = '請輸入正確格式 Eg. 1,2,3,4';
      formValid = false;
    } else if (value.match(/\s/)) {
      errMsg = '不可有空格';
      formValid = false;
    } else if(value.match(/[1-4]{0,3}[1-4]{1}/)) {
      let valueArr = value.split(',');
      if (new Set(valueArr).size !== valueArr.length) {
        errMsg = '數字不可重複';
        formValid = false;
      } else {
        errMsg = '';
        formValid = true;
        submittedValueArray = valueArr;
        // console.log(submittedValueArray);
      }
    } else {
      errMsg = '請輸入正確格式 Eg. 1,2,3,4';
      formValid = false;
    }

    this.setState({
      formErrors: errMsg,
      formValid,
      submittedValueArray
    });

  }

  handleBtnClick(e) {
    e.preventDefault();
    let { submittedValueArray } = this.state;

    const code = {
      1: 'square',
      2: 'circle',
      3: 'triangle',
      4: 'plus',
    }

    let sequenceObj = {};

    for(var i=0; i < submittedValueArray.length; i++) {
      sequenceObj[i+1] = code[parseInt(submittedValueArray[i], 10)]
    }

    if(this.state.formValid) {

      this.props.dispatch(updateIconDisplay(sequenceObj));
      this.props.dispatch(resetCount());
      this.clearInputField()
    }

  }

  handleInputChange(e) {

    this.setState({
      value: e.target.value
    }, this.validateField(e.target.value))

  }

  clearInputField() {
    this.setState({
      value: '',
      submittedValueArray: '',
      formErrors: '',
      formValid: false
    });

  }

  render() {

    const { value, formErrors, formValid } = this.state;

    return (
      <div className="config-container">
        <p className="title">config:</p>
        <Config
          value={value}
          errorMsg={formErrors}
          formValid={formValid}
          onBtnClick={this.handleBtnClick}
          onIpnutChange={this.handleInputChange} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    iconCount: state.iconCount,
    iconSequence: state.iconSequence
  };
}

export default connect(mapStateToProps)(ConfigContainer);
