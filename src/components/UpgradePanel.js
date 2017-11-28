/* eslint-disable */
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from '../actions/upgradeActions'

import PanelExtend from './PanelExtend'
import PanelLevel from './PanelLevel'


class UpgradePanel extends PureComponent {
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
                extendsCount,
                iconForm,
                iconColor } = this.props;


        const coreStyle = {
            padding: '5px',
            height: '75px',
            display: 'grid',
            gridTemplateColumns: '[hirearea] 80% [updatearea] 20%',
            backgroundColor: '#F1F1F1',
            marginBottom: '35px'
        }
        const styleAbsolute = {
            pointerEvents: 'none',
            position: 'absolute'
        }

        const iconStyle = {
            backgroundColor: iconColor,
            marginRight: '50px',
            height: '65px',
            width: '65px'
        }


        if (iconForm == "circle") {
            iconStyle.borderRadius = '50%';
        } else if (iconForm == "square") {
            iconStyle.borderRadius = '5%';
        }


        return(
            <div style={coreStyle}>
                <PanelExtend 
                    extendCost={extendCost}
                    extendsCount={extendsCount}
                    extendUpgrade={this.safeExtend}>
                    <div style={iconStyle}></div>
                </PanelExtend>

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

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpgradePanel)