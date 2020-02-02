import { connect } from 'react-redux';
import { PrivateRoute } from './privateroute';
import { redirectTo } from 'modules';

export default connect(
  state => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  dispatch => ({
    onRedirectToLogin: (redirectBackTo) => redirectTo(`/login?redirectUrl=${redirectBackTo}`)
  })
)(PrivateRoute);