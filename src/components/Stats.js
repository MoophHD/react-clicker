import React, { Component } from 'react';
import {connect} from 'react-redux';

class Stats extends Component {
    render() {
        const {score, perClick, perSec, clickMod} = this.props;
        return(
            <div className="stats">
                <h1>score: {score}</h1>
                <h1>perClick: {perClick*clickMod}</h1>
                <h1>perSec: {perSec}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        score: state.page.score,
        perClick: state.page.stats.perClick,
        perSec: state.page.stats.perSec,
        clickMod: state.page.stats.clickMod
    }
}

export default connect(mapStateToProps, null)(Stats)