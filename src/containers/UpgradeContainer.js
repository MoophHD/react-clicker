import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

import UpgradePanel from '../components/UpgradePanel'

class UpgradeContainer extends Component {
    componentWillMount() {
        this.icons = {
            0: {
                form: "square",
                color: "#1EA996"
            },           
            1: {
                form: "circle",
                color: "#FF715B"
            }
        }
    }

    render() {
        const ids = this.props.ids;
        const icons = this.icons;
        
        let icon, iconForm, iconColor;
        return(
            <div className="col-md-7">
                {ids.map((id) => {
                    icon = icons[id];
                    iconForm = icon.form;
                    iconColor = icon.color;
                    return (<UpgradePanel 
                        id={id} 
                        key={`_upgrade${id}`}
                        iconForm={iconForm}
                        iconColor={iconColor}/>)
                    }
                )}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      ids: state.page.upgrades.ids
    }
  }
  
export default connect(mapStateToProps, null)(UpgradeContainer)
