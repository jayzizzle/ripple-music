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
import SidebarContainer from './dashboard/sidebar/sidebar_container';
import PlayerContainer from './dashboard/player/player_container';
import MainContainer from './dashboard/main/main_container';
import PlaylistsContainer from './playlists/playlists_container';
import ArtistsContainer from './artists/artists_container';
import ArtistShowContainer from './artists/artist_show_container';
import AlbumsContainer from './albums/albums_container';
import AlbumShowContainer from './albums/album_show_container';
import TracksContainer from './tracks/tracks_container';
import PlaylistShowContainer from './playlists/playlist_show_container';
import ExploreContainer from './explore/explore_container';

const App = () => (
  <>
    <SidebarContainer />
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <>
        <ProtectedRoute
          exact
          path='/artists/:artistId/albums/:albumId'
          component={AlbumShowContainer}
        />
        <ProtectedRoute
          exact
          path='/playlists/:playlistId'
          component={PlaylistShowContainer}
        />
        <ProtectedRoute
          exact
          path='/artists/:artistId'
          component={ArtistShowContainer}
        />
        <ProtectedRoute exact path='/dashboard' component={MainContainer} />
        <ProtectedRoute
          exact
          path='/playlists'
          component={PlaylistsContainer}
        />
        <ProtectedRoute exact path='/albums' component={AlbumsContainer} />
        <ProtectedRoute exact path='/tracks' component={TracksContainer} />
        <ProtectedRoute exact path='/artists' component={ArtistsContainer} />
        <ProtectedRoute exact path='/explore' component={ExploreContainer} />
        <PlayerContainer />
      </>
    </Switch>
  </>
);

export default App;
