import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createHashHistory } from 'history';

import { 
  Login, Signup, ForgotPassword, Verification, Dashboard, ResetPassword ,
  OverlaysList, LinksList, CreateOverlay, OverlayType
} from 'modules';

import PrivateRoute from './index';

const history = createHashHistory();

export function redirectTo(url) {
  return history.push(url);
}

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/overlays" />
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
            <ResetPassword redirectTo='/login' signinPath='/login' />
          </Route>
          <PrivateRoute exact path='/dashboard'>
              <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path='/links'>
              <LinksList />
          </PrivateRoute>
          <PrivateRoute exact path='/overlays'>
              <OverlaysList newOverlayPath='/overlays/new' />
          </PrivateRoute>
          <PrivateRoute exact path='/overlays/new'>
              <CreateOverlay />
          </PrivateRoute>
          <PrivateRoute exact path='/user-profile'>
              <LinksList />
          </PrivateRoute>
          <PrivateRoute exact path='/logout'>
              <LinksList />
          </PrivateRoute>
          <Route exact path="/overlay-page/:type/:category/:template">
            <OverlayType />
          </Route>
        </Switch>
    </Router>
  );
}