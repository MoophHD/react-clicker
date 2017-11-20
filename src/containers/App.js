import React, { Component } from 'react';

import GameArea from './GameArea'
import Control from './Control'


 class App extends Component {

  render() {
    return(
      <div className="container">
        <div className="row">
          <GameArea />
          <Control />
        </div>
      </div>
    )
  }
}

export default App
