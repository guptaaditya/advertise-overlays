import { connect } from 'react-redux'
import Verification from './verification';
import * as actions from '../actions';
import { redirectTo } from 'modules/redirect/actions';

export default connect(
    (state) => ({
      emailAddress: state.userManagement.resetPasswordForUserEmail,
    }),
    (dispatch) => ({
      onResendVerificationCode: (emailAddress) => {
        return dispatch(actions.onResendVerificationCode(emailAddress));
      },
      onVerificationCodeSubmit: (code, redirectUrl) => {
        return dispatch(actions.onVerificatonCodeSubmit(code, redirectUrl));
      },
      onRedirect: (redirectUrl) => dispatch(redirectTo(redirectUrl)),
    })
)(Verification);
  