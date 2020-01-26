import { connect } from 'react-redux';
import { PrivateRoute } from './privateroute';
import { redirectTo } from 'modules/redirect/actions';

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  dispatch => ({
    onRedirectToLogin: (redirectBackTo) => dispatch(redirectTo(`/login?redirectUrl=${redirectBackTo}`))
  })
)(PrivateRoute);