import { connect } from 'react-redux';
import Links from './links';
import * as actions from './actions';

export default connect(
    state => ({
        data: state.links.data,
    }),
    (dispatch) => ({
        onFetchLinks: e => dispatch(actions.onFetchLinks()),
    })
)(Links);