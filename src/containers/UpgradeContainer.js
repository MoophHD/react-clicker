import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

import UpgradePanel from '../components/UpgradePanel'

class UpgradeContainer extends Component {
    render() {
        return(
            <div className="col-md-5">
                <UpgradePanel id={0} key={0}/>
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     return {
//       isActive: state.player.isActive,
//       score: state.page.score
//     }
//   }
  
// function mapDispatchToProps(dispatch) {
//     return {
//         pageActions: bindActionCreators(pageActions, dispatch)
//     }
// }
export default connect(null, null)(UpgradeContainer)

// export default connect(mapStateToProps, mapDispatchToProps)(Control)