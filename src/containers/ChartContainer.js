import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarGraph from '../components/BarGraph/BarGraph';

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconNameArray: Object.values(this.props.iconSequence)
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.iconSequence !== this.props.iconSequence) {
      this.setState({
        iconNameArray: Object.values(nextProps.iconSequence)
      })
    }
  }

  render() {

    const { iconCount } = this.props;
    const { iconNameArray } = this.state;

    let data = [];

    iconNameArray.map( name => data.push(
      {
        icon: name,
        count: iconCount[name]
      }
    ))

    return (
      <div className="chart-container">
        <BarGraph data={data} />
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

export default connect(mapStateToProps)(ChartContainer);
