import { combineReducers } from 'redux'

import auth from 'modules/router/reducer';
import userManagement from 'modules/login/reducer';
import overlays from 'modules/overlays/reducer';
import links from 'modules/links/reducer';

export default combineReducers({
  auth,
  userManagement,
  overlays,
  links,
})