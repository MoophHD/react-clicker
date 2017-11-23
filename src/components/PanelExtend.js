import React from 'react';
import PropTypes from 'prop-types';

import FormattedNum from './FormattedNum'

function PanelExtend(props) {
    const style = {
        backgroundColor: 'none',
        display: 'flex',
        alignItems: 'center'
    }

    const iconStyle = {
        backgroundColor: '#1EA896',
        marginRight: '5px',
        height: '65px',
        width: '65px',
        borderRadius: '50%'
    }
    return(
        <div onClick={props.extendUpgrade} style={style}>
            <div style={iconStyle}></div>
            <div>
                <div style={{fontSize: '2em', fontWeight: 'bold'}}><FormattedNum num={props.extendCost}/></div>
                <div style={{fontSize: '0.85em', marginTop: '-5px'}}>
                    {props.extendsCount}
                </div>  
            </div>
        </div>
    )
}

export default PanelExtend;

PanelExtend.propTypes = {
    extendCost: PropTypes.number,
    extendsCount: PropTypes.number,
    extendUpgrade: PropTypes.func
}
