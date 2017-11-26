import React, { Component } from 'react';
import {connect} from 'react-redux';

import FormattedNum from './FormattedNum'

class Stats extends Component {
    render() {
        const {score, perClick, perTick } = this.props;
        return(
            <div className="stats">
                <h1>score: <FormattedNum num={score}/></h1>
                <h1>perClick: <FormattedNum num={perClick}/></h1>
                <h1>perSec: <FormattedNum num={perTick/4}/></h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        score: state.page.score,
        perClick: state.page.stats.perClick,
        perTick: state.page.stats.perTick
    }
}

export default connect(mapStateToProps, null)(Stats)