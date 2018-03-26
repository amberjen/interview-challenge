import React, { Component } from 'react';
import { addOneSquare, addOneCircle, addOneTriangle, addOnePlus } from '../actions';
import { connect } from 'react-redux';
import Select from '../components/Select/Select';
import Option from '../components/Select/Option';
import Icon from '../components/Icon/Icon';

class SelectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 1,
      errorMsg: '',
      isOpen: false,
      valueValid: true,
    }

    this.renderIcon = this.renderIcon.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.validateField = this.validateField.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const code = {
      'square': 1,
      'circle': 2,
      'triangle': 3,
      'plus': 4
    };
    if(nextProps.iconSequence[1] !== this.props.iconSequence[1]) {
      this.setState({
        selectedOption: code[nextProps.iconSequence[1]]
      })
    }
  }

  onFocus() {
    this.setState({
      isOpen: true
    })
  }

  onKeyPress(e) {

    if (e.key === 'Enter') {

      this.setState({
        valueValid: true,
        isOpen: false,
        errorMsg: '',
      })

      const code = {
        1: 'square',
        2: 'circle',
        3: 'triangle',
        4: 'plus'
      };

      switch(code[e.target.value]) {
        case 'square':
          this.props.dispatch(addOneSquare());
          break;
        case 'circle':
          this.props.dispatch(addOneCircle());
          break;
        case 'triangle':
          this.props.dispatch(addOneTriangle());
          break;
        case 'plus':
          this.props.dispatch(addOnePlus());
          break;
        default:
          break;
      }

    } else {
      this.setState({
        valueValid: false
      })
    }
  }

  onChange(e) {
    this.setState({
      isOpen: true,
      selectedOption: e.target.value
    }, this.validateField(e.target.value))
  }

  validateField(value) {
    let err = this.state.errorMsg;
    let regex = /^[0-9]*$/;

    const hintStyle = {
      display: 'flex',
      alignItems: 'center',
      color: '#313439'
    }

    const enterKeyStyle = {
      background: '#313439',
      color: '#fafafa',
      fontSize: '.825rem',
      margin: '0 .35rem',
      padding: '.15rem .85rem',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '25px',
    }

    if (value.length === 0 ) {
      err = '輸入代號或點選圖形';
    } else if (value === 0 || value === '0'){
      err = '最小為 1';
    } else if (value > 4 ){
      err = '超過範圍';
    } else if(value.length > 0 && value.match(regex)) {
      err = <div style={hintStyle}>按下<div style={enterKeyStyle}>Enter</div>確認</div>;
    } else if(!value.match(regex)) {
      err = '請輸入數字';
    } else {
      err = '';
    }

    this.setState({
      errorMsg: err
    })

  }

  onClick(e, clickedOption) {

    if (this.state.selectedOption !== clickedOption) {
      this.setState({
        selectedOption: clickedOption
      }, this.closeMenu() )

      const code = {
        1: 'square',
        2: 'circle',
        3: 'triangle',
        4: 'plus'
      };

      switch(code[clickedOption]) {
        case 'square':
          this.props.dispatch(addOneSquare());
          break;
        case 'circle':
          this.props.dispatch(addOneCircle());
          break;
        case 'triangle':
          this.props.dispatch(addOneTriangle());
          break;
        case 'plus':
          this.props.dispatch(addOnePlus());
          break;
        default:
          break;
      }

    } else {
      this.closeMenu();
    }
  }

  closeMenu() {
    this.setState({
      isOpen: false,
      errorMsg: '',
      valueValid: true
    })
  }

  renderIcon(sequenceObj) {
    let nameArr = Object.values(sequenceObj);

    const code = {
      'square': 1,
      'circle': 2,
      'triangle': 3,
      'plus': 4
    };

    return (
      nameArr.map( name =>
        <Option
          key={code[name]}
          value={code[name]}
          onClick={(e) => this.onClick(e, code[name])}>
          <Icon type={name} />
        </Option> )
    );
  }

  render() {
    const { iconSequence } = this.props;
    const { selectedOption, errorMsg, isOpen, valueValid } = this.state;

    return (
      <div className="select-container">
        <p className="title">select:</p>
        <Select
          selectedOption={selectedOption}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onKeyPress={this.onKeyPress}
          valueValid={valueValid}
          isOpen={isOpen}
          errorMsg={errorMsg}>
          {this.renderIcon(iconSequence)}
        </Select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    iconCount: state.iconCount,
    iconSequence: state.iconSequence
  };
}

export default connect(mapStateToProps)(SelectContainer);
