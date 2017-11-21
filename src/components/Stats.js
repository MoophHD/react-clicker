import React, { Component } from 'react';
import {connect} from 'react-redux';

class Stats extends Component {
    render() {
        const {score, perClick, perTick, clickMod} = this.props;
        return(
            <div className="stats">
                <h1>score: {score}</h1>
                <h1>perClick: {perClick*clickMod}</h1>
                <h1>perSec: {perTick/4}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        score: state.page.score,
        perClick: state.page.stats.perClick,
        perTick: state.page.stats.perTick,
        clickMod: state.page.stats.clickMod
    }
}

export default connect(mapStateToProps, null)(Stats)