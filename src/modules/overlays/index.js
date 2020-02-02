import { connect } from 'react-redux';
import Overlays from './overlays';
import * as actions from './actions';

export default connect(
    state => ({
        data: state.overlays.data,
    }),
    (dispatch) => ({
        onFetchOverlays: e => dispatch(actions.onFetchOverlays()),
    })
)(Overlays);