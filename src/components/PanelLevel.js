import React from 'react';
import PropTypes from 'prop-types';

function PanelLevel(props) {
    const style = {
        backgroundColor: 'none'
    }
    return(
        <div onClick={props.levelupUpgrade} style={style}>
            <div >{props.levelUpCost}</div>
            <div >
                {props.level}
            </div>
        </div>
    )
}

export default PanelLevel;

PanelLevel.propTypes = {
    levelUpCost: PropTypes.number,
    level: PropTypes.number,
    maxLevel: PropTypes.number,
    levelupUpgrade: PropTypes.func
}
