import React, { Component } from 'react';
import './App.css';

import ConnectedApp from './ConnectedApp'
import DisconnectedApp from './DisconnectedApp'
import EthereumService from './services/EthereumService'

class App extends Component {

  render() {
    return (
      <div className="App">
        { EthereumService.isConnected() ? <ConnectedApp eth={ EthereumService.getEth() }  /> : <DisconnectedApp />  }
      </div>
    );
  }
}

export default App;
