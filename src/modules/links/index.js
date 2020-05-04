import { connect } from 'react-redux';
import Links from './links';
import * as actions from './actions';
import * as selectors from './selectors';

export default connect(
    state => ({
        linksList: selectors.getLinksList(state),
    }),
    (dispatch) => ({
        onFetchLinks: e => dispatch(actions.onFetchLinks()),
    })
)(Links);