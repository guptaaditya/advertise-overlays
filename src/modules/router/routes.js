import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { 
  Login, Signup, ForgotPassword, Verification, RedirectTo, Dashboard, ResetPassword ,
  OverlaysList, LinksList
} from 'modules';
import Sidebar from 'components/sidebar';
import PrivateRoute from './index';

export default function Routes() {
  return (
    <Router basename='/advertise-overlays'>
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
              <OverlaysList />
          </PrivateRoute>
          <PrivateRoute exact path='/user-profile'>
              <LinksList />
          </PrivateRoute>
          <PrivateRoute exact path='/logout'>
              <LinksList />
          </PrivateRoute>
        </Switch>
        <RedirectTo />
    </Router>
  );
}