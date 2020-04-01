import { connect } from 'react-redux';
import CustomizeOverlay from './overlaycustomize';
import * as actions from '../actions';
import * as selectors from '../selectors';

export default connect(
    state => {
        const selected = selectors.getCustomizeOverlay(state);
        return {
            selected,
        };
    },
    (dispatch) => ({
        onSave: (...params) => dispatch(actions.onSaveCustomizedOverlay(...params)),
    })
)(CustomizeOverlay);