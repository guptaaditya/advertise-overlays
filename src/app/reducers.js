import { combineReducers } from 'redux'

import redirect from 'modules/redirect/reducer';
import auth from 'modules/router/reducer';
import userManagement from 'modules/login/reducer';

export default combineReducers({
  redirect,
  auth,
  userManagement,
})