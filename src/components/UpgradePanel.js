import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../actions/upgradeActions'

class UpgradePanel extends Component {
    render() {
        const { levelUpCost, extendCost, value, level, size, name, id } = this.props;
        return(
            <div className="upgradePanel">
                <h1>name {name}</h1>
                <div onClick={() => this.props.actions.extendUpgrade(id)}>size {size}</div>
                <div onClick={() => this.props.actions.levelupUpgrade(id)}>level {level}</div>
                <div>value {value}</div>
                <div>extendCost {extendCost}</div>
                <div>levelUpCost {levelUpCost}</div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    let self = state.page.upgrades.byid[ownProps.id];
    return {
        levelUpCost: self.levelUpCost,
        extendCost: self.extendCost,
        value: self.value,
        level: self.level,
        size: self.size,
        name: self.name
    }
  }

//   function mapStateToProps(state, ownProps) {
//     let self = state.page.upgrades.byid[ownProps.id];
//     return {
//         levelUpCost: state.page.upgrades.byid[ownProps.id].levelUpCost,
//         extendCost: state.page.upgrades.byid[ownProps.id].extendCost,
//         value: state.page.upgrades.byid[ownProps.id].value,
//         level: state.page.upgrades.byid[ownProps.id].level,
//         size: state.page.upgrades.byid[ownProps.id].size,
//         name: state.page.upgrades.byid[ownProps.id].name
//     }
//   }

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpgradePanel)
