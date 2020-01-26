import { connect } from 'react-redux'
import Login from './login';
import * as actions from '../actions';
import { redirectTo } from 'modules/redirect/actions';

export default connect(
    (state) => ({
  
    }),
    (dispatch) => ({
      onLogin: (userInput, redirectUrl) => dispatch(actions.onLogin(userInput, redirectUrl)),
      onRedirect: (redirectUrl) => dispatch(redirectTo(redirectUrl)),
    })
)(Login);
  