/* eslint-disable */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../actions/upgradeActions'

import PanelExtend from './PanelExtend'
import PanelLevel from './PanelLevel'


class UpgradePanel extends Component {
    render() {
        const { levelUpCost,
                extendCost, 
                value, 
                level, 
                name, 
                id, 
                extendsCount } = this.props;

        const { extendUpgrade, levelupUpgrade } = this.props.actions;

        const style = {
            padding: '5px',
            height: '75px',
            display: 'grid',
            gridTemplateColumns: '[hirearea] 80% [updatearea] 20%',
            backgroundColor: '#F1F1F1'
        }
        const styleAbsolute = {
            pointerEvents: 'none',
            position: 'absolute'
        }
        return(
            <div style={style}>
                {/* <h1 style={styleAbsolute}>{name}</h1> */}
                {/* <div  style={styleAbsolute}>value {value}</div> */}
                <PanelExtend 
                    extendCost={extendCost}
                    extendsCount={extendsCount}
                    extendUpgrade={extendUpgrade.bind(null, id)}
                    />
                <PanelLevel                     
                    levelUpCost={levelUpCost}
                    level={level}
                    levelupUpgrade={levelupUpgrade.bind(null, id)}
                    maxLevel={20}
                    />
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
        name: self.name,
        extendsCount: self.extendsCount
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
