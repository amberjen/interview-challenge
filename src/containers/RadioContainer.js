import React, { Component } from 'react';
import { addOneSquare, addOneCircle, addOneTriangle, addOnePlus } from '../actions';
import { connect } from 'react-redux';
import RadioGroup from '../components/Radio/RadioGroup';
import Radio from '../components/Radio/Radio';

class RadioContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: this.props.iconSequence[1],
    }

    this.onChange = this.onChange.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.iconSequence !== this.props.iconSequence) {
      this.setState({
        selectedValue: nextProps.iconSequence[1]
      })
    }
  }

  onChange(e) {
    this.setState({
      selectedValue: e.target.value
    })

    // TODO: temp only

    switch(e.target.value) {
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

  }

  renderIcon(sequenceObj) {
    let nameArr = Object.values(sequenceObj);
    return (
      nameArr.map( name => <Radio key={name} icon={name} value={name} /> )
    );
  }

  render() {
    const { iconSequence } = this.props;
    const { selectedValue } = this.state;
    
    return (
      <div className="radio-container">
        <p className="title">radio:</p>
        <RadioGroup
          name="radio-controls"
          onChange={this.onChange}
          selectedValue={selectedValue}>
          {this.renderIcon(iconSequence)}
        </RadioGroup>
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

export default connect(mapStateToProps)(RadioContainer);
