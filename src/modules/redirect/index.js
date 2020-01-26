import { connect } from 'react-redux';
import RedirectTo from './redirect';

export default connect(state => ({
    redirectToUrl: state.redirect.currentURL,
}))(RedirectTo)