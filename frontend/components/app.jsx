import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  BrowserRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Layout from './dashboard/layout';
import Dashboard from './dashboard/dashboard';

const App = () => (
  <>
    <Switch>
      <Route exact path='/' component={Splash} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <>
        {/* <Sidebar /> */}
        <ProtectedRoute exact path='/dashboard' component={Layout} />
        {/* <Player /> */}
      </>
    </Switch>
  </>
);

export default App;