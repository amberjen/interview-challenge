import React, { Component } from 'react';
import { addOneSquare, addOneCircle, addOneTriangle, addOnePlus } from '../actions';
import { connect } from 'react-redux';
import Tabs from '../components/Tabs/Tabs';
import TabPane from '../components/Tabs/TabPane';
import Icon from '../components/Icon/Icon';

class TabsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1
    }

    this.onClick = this.onClick.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.iconSequence[1] !== this.props.iconSequence[1]) {
      this.setState({
        activeTab: 1
      })
    }
  }

  onClick(e) {
    this.setState({
      activeTab: e.target.value
    })

    switch(this.props.iconSequence[e.target.value]) {
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
    const code = {
      'square': 1,
      'circle': 2,
      'triangle': 3,
      'plus': 4
    };
    return (
      nameArr.map( (name, idx) =>
      <TabPane key={idx+1} label={code[name]}><Icon type={name} /></TabPane> )
    );
  }

  render() {
    const { iconSequence } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tabs-container">
        <p className="title">tabs:</p>
        <Tabs activeTab={activeTab} onClick={this.onClick}>
          {this.renderIcon(iconSequence)}
        </Tabs>
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

export default connect(mapStateToProps)(TabsContainer);
