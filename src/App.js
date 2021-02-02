import React from 'react';
import ConfiguratorContainer from './components/Configurator';
import ConfiguredImageContainer from './components/ConfiguredImage';
import './App.css';

const App = () => (
  <div className="App">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h4>Configure your new car</h4>
        </div>
      </div>
      <div className="row">
        <div className="col m12 l8">
          <ConfiguratorContainer />
        </div>
        <div className="col m12 l4">
          <ConfiguredImageContainer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
