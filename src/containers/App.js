import React, { Component } from 'react';

import GameArea from './GameArea'
import UpgradeContainer from './UpgradeContainer'


 class App extends Component {
  
  render() {
    return(
      <div className="container">
        <div className="row">
          <GameArea />
          <UpgradeContainer />
        </div>
      </div>
    )
  }
}

export default App
