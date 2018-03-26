import React, { Component } from 'react';
import RadioContainer from '../containers/RadioContainer';
import TabsContainer from '../containers/TabsContainer';
import SelectContainer from '../containers/SelectContainer';
import ChartContainer from '../containers/ChartContainer';
import ConfigContainer from '../containers/ConfigContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="section-config">
          <ConfigContainer />
        </section>
        <div className="layout-helper">
          <section className="section-controls">
            <RadioContainer />
            <TabsContainer />
            <SelectContainer />
          </section>
          <section className="section-chart">
            <ChartContainer />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
