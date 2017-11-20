import React, { Component } from 'react';
import {connect} from 'react-redux';

import ClickTarget from '../components/ClickTarget'
import Stats from '../components/Stats'

class GameArea extends Component {
    render() {
        return(
            <div className="col-md-7">
                <Stats />
                <ClickTarget />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isActive: state.player.isActive,
        score: state.page.score
    }
}

export default connect(mapStateToProps, null)(GameArea)