import { connect } from 'react-redux';
import CreateOverlay from './overlaycreate';
import * as actions from '../actions';

export default connect(
    state => ({
        stepsStatus: state.createOverlay,
    }),
    (dispatch) => ({
    })
)(CreateOverlay);