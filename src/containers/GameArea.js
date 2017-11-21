import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import ClickTarget from '../components/ClickTarget'
import Stats from '../components/Stats'

import * as actions from '../actions/pageActions'

class GameArea extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.intervalId = setInterval(() => this.tick(), 250);
    }

    tick() {
        this.props.actions.tick();
    }

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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameArea)