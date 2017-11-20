import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

import * as actions from '../actions/pageActions'

class ClickTarget extends Component {
    render() {
        const { perClick, clickMod } = this.props.stats;
        const { targetClick } = this.props.actions;

        console.log(perClick);
        return(
            <div onClick={() => targetClick(perClick*clickMod)} className="clickTarget">
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stats: state.page.stats
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickTarget)