import { connect } from 'react-redux'
import Mainbody from './mainbody';
import { redirectTo } from 'modules/redirect/actions';

export default connect(
    null,
    (dispatch) => ({
      onRedirect: (redirectUrl) => dispatch(redirectTo(redirectUrl)),
    })
)(Mainbody);
  