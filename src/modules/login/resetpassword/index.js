import { connect } from 'react-redux'
import ResetPassword from './resetpassword';
import * as actions from '../actions';
import { redirectTo } from 'modules/redirect/actions';

export default connect(
    null,
    (dispatch) => ({
        onResetPassword: (userInput, redirectUrl) => {
            return dispatch(actions.onResetPassword(userInput, redirectUrl));
        },
        onRedirect: (redirectUrl) => dispatch(redirectTo(redirectUrl)),
    })
)(ResetPassword);
  