import { connect } from 'react-redux';
import CreateOverlay from './overlaycreate';
import * as actions from '../actions';

export default connect(
    state => {
        return {
            stepsStatus: state.overlays.createOverlay,
        };
    },
    (dispatch) => ({
        onSelection: (property, value) => dispatch(actions.selectedPropertyValue(property, value)) 
    })
)(CreateOverlay);