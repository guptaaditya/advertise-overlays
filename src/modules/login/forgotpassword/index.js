import { connect } from 'react-redux'
import ForgotPassword from './forgotpassword';
import * as actions from '../actions';
import { redirectTo } from 'modules/redirect/actions';

export default connect(
    (state) => ({
      
    }),
    (dispatch) => ({
      onForgotPassword: (userInput, redirectUrl) => {
        return dispatch(actions.onForgotPassword(userInput, redirectUrl));
      },
      onRedirect: (redirectUrl) => dispatch(redirectTo(redirectUrl)),
    })
)(ForgotPassword);
  