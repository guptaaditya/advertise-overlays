import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createHashHistory } from 'history';

import { 
  Login, Logout, Signup, ForgotPassword, Verification, Dashboard, ResetPassword, UserProfile, 
  OverlaysList, LinksList, CreateOverlay, OverlayType, CustomizeOverlay, Admin, 
} from 'modules';

import PrivateRoute from './index';
import * as actionTypes from './actiontypes';
const history = createHashHistory();

export function redirectTo(url) {
  history.push(url);
  return {
    type: actionTypes.ON_REIRECT,
    url,
  };
}

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/login">
            <Login redirectTo='/dashboard' signupPath='/signup' forgotpasswordPath='/forgot-password' />
          </Route>
          <Route exact path="/signup">
            <Signup redirectTo='/dashboard' signinPath='/login' />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword redirectTo='/verification' signinPath='/login' />
          </Route>
          <Route exact path="/verification">
            <Verification redirectTo='/reset-password' signinPath='/login' />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword redirectTo='/dashboard' signinPath='/login' />
          </Route>
          <PrivateRoute exact path='/dashboard'>
              <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path='/links'>
              <LinksList />
          </PrivateRoute>
          <PrivateRoute exact path='/overlays/new'>
              <CreateOverlay customizeOverlayPath='/overlays/customize/' overlaysListPath='/overlays' />
          </PrivateRoute>
          <PrivateRoute exact path='/overlays/customize/:overlayId'>
              <CustomizeOverlay overlayListPath='/overlays' />
          </PrivateRoute>
          <PrivateRoute exact path='/overlays'>
              <OverlaysList newOverlayPath='/overlays/new' />
          </PrivateRoute>
          <PrivateRoute exact path='/user-profile'>
              <UserProfile />
          </PrivateRoute>
          <PrivateRoute exact path='/logout'>
              <Logout signinPath='/login' />
          </PrivateRoute>
          <PrivateRoute exact path='/admin'>
              <Admin />
          </PrivateRoute>
          <Route exact path="/overlay-page/:type/:category/:template">
            <OverlayType />
          </Route>
        </Switch>
    </Router>
  );
}