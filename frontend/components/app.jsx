import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  BrowserRouter,
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Layout from './dashboard/layout';
import Dashboard from './dashboard/dashboard';
import SidebarContainer from './dashboard/sidebar/sidebar_container';
import PlayerContainer from './dashboard/player/player_container';
import TestContainer from './dashboard/player/test_container';

import { Main } from './dashboard/main';
import { Playlists } from './dashboard/playlists';
import ArtistsContainer from './artists/artists_container';
import ArtistShowContainer from './artists/artist_show_container';
import AlbumsContainer from './albums/albums_container';
import AlbumShowContainer from './albums/album_show_container';
import TracksContainer from './tracks/tracks_container';

const App = () => (
  <>
    <SidebarContainer />
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <>
        <ProtectedRoute
          path='/artists/:artistId/albums/:albumId'
          component={AlbumShowContainer}
        />
        <ProtectedRoute
          path='/artists/:artistId'
          component={ArtistShowContainer}
        />
        <ProtectedRoute exact path='/dashboard' component={Main} />
        <ProtectedRoute exact path='/playlists' component={Playlists} />
        <ProtectedRoute exact path='/albums' component={AlbumsContainer} />
        <ProtectedRoute exact path='/tracks' component={TracksContainer} />
        <ProtectedRoute exact path='/artists' component={ArtistsContainer} />
        {/* <PlayerContainer /> */}
        <TestContainer />
      </>
    </Switch>
  </>
);

export default App;
