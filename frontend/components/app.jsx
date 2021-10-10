import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Splash from './splash/splash';
import SessionForm from './session/session_form';

const App = () => (
  <>
    <Switch>
      {/* <AuthRoute exact path='/login' component={LoginFormContainer} /> */}
      <AuthRoute exact path='/signup' component={SessionForm} />
      <Route exact path='/' component={Splash} />
    </Switch>
  </>
);

export default App;