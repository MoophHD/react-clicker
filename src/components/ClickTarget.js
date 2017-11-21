import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

import * as actions from '../actions/pageActions'

class ClickTarget extends Component {
    render() {
        const { targetClick } = this.props.actions;

        return(
            <div onClick={() => targetClick()} className="clickTarget">
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(ClickTarget)