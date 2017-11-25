/* eslint-disable */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../actions/upgradeActions'

import PanelExtend from './PanelExtend'
import PanelLevel from './PanelLevel'


class UpgradePanel extends Component {
    constructor(props) {
        super(props);
        
        this._id = this.props.id;
        this._extendUpgrade = this.props.actions.extendUpgrade;
        this._levelupUpgrade = this.props.actions.levelupUpgrade;
        
        this.safeExtend = this.safeExtend.bind(this);
        this.safeLevelup = this.safeLevelup.bind(this);
    }
    safeExtend() {
        const {score, extendCost} = this.props;
        console.log(score);
        console.log(extendCost);
        if (score >= extendCost) {
            this._extendUpgrade(this._id)
        }
    }

    safeLevelup() {
        const {score, levelUpCost} = this.props;

        if (score >= levelUpCost) {
            this._levelupUpgrade(this._id);
        }
    }

    render() {
        const { levelUpCost,
                extendCost, 
                value, 
                level, 
                name, 
                extendsCount } = this.props;


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
                    extendUpgrade={this.safeExtend}
                    />
                <PanelLevel                     
                    levelUpCost={levelUpCost}
                    level={level}
                    levelupUpgrade={this.safeLevelup}
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
        extendsCount: self.extendsCount,
        score: state.page.score
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
