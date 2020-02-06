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
        onSelectType: (property, value) => dispatch(actions.selectOverlayType(property, value)),
        onSelectCategory: (property, value) => dispatch(actions.selectOverlayCategory(property, value)) ,
        onSelectTemplate: (property, value) => dispatch(actions.selectOverlayTemplate(property, value)),
        onSelectName: (property, value) => dispatch(actions.selectOverlayName(property, value)) ,
        onSelection: (property, value) => dispatch(actions.selectedPropertyValue(property, value)) 
    })
)(CreateOverlay);