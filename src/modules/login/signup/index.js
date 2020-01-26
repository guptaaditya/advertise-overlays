import { connect } from 'react-redux'
import Signup from './signup';
import * as actions from '../actions';
import { redirectTo } from 'modules/redirect/actions';

export default connect(
    (state) => ({
  
    }),
    (dispatch) => ({
      onSignup: (userInput, redirectUrl) => dispatch(actions.onSignup(userInput, redirectUrl)),
      onRedirect: (redirectUrl) => dispatch(redirectTo(redirectUrl)),
    })
)(Signup);
  