import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import ClickTarget from '../components/ClickTarget'
import Stats from '../components/Stats'

import * as actions from '../actions/pageActions'

class GameArea extends PureComponent {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        let grades = this.props.upgrades;
        this.lastUpgrades = JSON.stringify(grades);
        this.calculateModifiers(grades);
        this.intervalId = setInterval(() => this.tick(), 250);
    }

    componentWillReceiveProps(nextProps) {
        let grades = nextProps.upgrades;
        let upgrades = JSON.stringify(grades);

        if (this.lastUpgrades != upgrades) {
            this.lastUpgrades = upgrades;
            this.calculateModifiers(grades);
        }
    }

    calculateModifiers(upgrades) {
        let {ids, byid} = upgrades;
        let result = { perClickBonus: 0, perTickBonus:0, modClick: 1, modTick: 1 };
        let upgrade, type, value, extendsCount;

        ids.forEach(id => {
            upgrade = byid[id];
            type = upgrade.type;
            value = upgrade.value;
            extendsCount = upgrade.extendsCount;
            result[type] += extendsCount*value;
        });

        this.props.actions.setModifiers(result);
    }

    tick() {
        this.props.actions.tick();
    }

    render() {
        return(
            <div className="col-md-5">
                <Stats />
                <ClickTarget />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isActive: state.player.isActive,
        score: state.page.score,
        upgrades: state.page.upgrades,
        modifiers: state.page.modifiers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameArea)

GameArea.propTypes = {
    isActive: PropTypes.bool,
    score: PropTypes.number,
    upgrades: PropTypes.object,
    modifiers: PropTypes.object
}