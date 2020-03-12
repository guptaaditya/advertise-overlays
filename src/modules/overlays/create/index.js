import { connect } from 'react-redux';
import CreateOverlay from './overlaycreate';
import * as actions from '../actions';

export default connect(
    state => {
        const stepsStatus = state.overlays.createOverlay;
        return {
            stepsStatus,
            selected: {
                type: stepsStatus.overlayType.selected,
                category: stepsStatus.overlayCategory.selected,
                template: stepsStatus.overlayTemplate.selected,
                name: stepsStatus.overlayName.selected,
            }
        };
    },
    (dispatch) => ({
        onSelectType: (property, value) => dispatch(actions.selectOverlayType(property)),
        onSelectCategory: (property, value) => dispatch(actions.selectOverlayCategory(property)),
        onSelectTemplate: (property, value) => dispatch(actions.selectOverlayTemplate(property)),
        onSelectName: (property, value) => dispatch(actions.selectOverlayName(property)),
        onSelection: (property, value) => dispatch(actions.selectedPropertyValue(property, value)) 
    })
)(CreateOverlay);