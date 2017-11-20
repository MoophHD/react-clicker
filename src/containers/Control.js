import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

class Control extends Component {
    render() {
        return(
            <div className="col-md-5">
                1
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
export default connect(null, null)(Control)

// export default connect(mapStateToProps, mapDispatchToProps)(Control)