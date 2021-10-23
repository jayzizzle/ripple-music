import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.userId) this.props.getUser(this.props.user.id);
  }

  render() {
    if (!this.props.userId) return null;
    const { user, logout } = this.props;
    return (
      <div className='flex-col-start sidebar'>
        <div className='sidebar-row'>
          <div className='flex-row-center vertical-center sidebar-left-col'>
            <i className='fas fa-portrait'></i>
          </div>
          <div className='flex-row-start vertical-center full-width'>
            <h5>{user.username}</h5>
          </div>
          <div className='flex-row-end vertical-center'>
            <button className='logout-button' onClick={() => logout()}>
              <i className='fas fa-power-off'></i>
            </button>
          </div>
        </div>

        <div className='sidebar-break flex-row-start'></div>

        <NavLink
          className='sidebar-link'
          to='/dashboard'
          activeClassName='sidebar-active'
        >
          <div className='sidebar-row'>Home</div>
        </NavLink>

        <div className='sidebar-break'>
          <h6 className='silver'>My Collection</h6>
        </div>

        <NavLink
          className='sidebar-link'
          exact
          to='/playlists'
          activeClassName='sidebar-active'
        >
          <div className='sidebar-row'>
            <div className='flex-row-center sidebar-left-col'>
              <i className='fas fa-list-alt'></i>
            </div>
            <div className='sidebar-center-col'>
              <p>Playlists</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className='sidebar-link'
          exact
          to='/albums'
          activeClassName='sidebar-active'
        >
          <div className='sidebar-row'>
            <div className='flex-row-center sidebar-left-col'>
              <i className='fas fa-compact-disc'></i>
            </div>
            <div className='sidebar-center-col'>
              <p>Albums</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className='sidebar-link'
          exact
          to='/tracks'
          activeClassName='sidebar-active'
        >
          <div className='sidebar-row'>
            <div className='flex-row-center sidebar-left-col'>
              <i className='fas fa-music menu-icon'></i>
            </div>
            <div className='sidebar-center-col'>
              <p>Tracks</p>
            </div>
          </div>
        </NavLink>

        <NavLink
          className='sidebar-link'
          exact
          to='/artists'
          activeClassName='sidebar-active'
        >
          <div className='sidebar-row'>
            <div className='flex-row-center sidebar-left-col'>
              <i className='fas fa-microphone menu-icon'></i>
            </div>
            <div className='sidebar-center-col'>
              <p>Artists</p>
            </div>
          </div>
        </NavLink>

        <div className='sidebar-break'>
          <h6 className='silver margin-top'>Developer Links</h6>
        </div>

        <a
          className='sidebar-link'
          href='http://github.com/jayzizzle'
          target='_blank'
        >
          <div className='sidebar-row'>
            <div className='sidebar-left-col'>
              <i className='fab fa-github'></i>
            </div>
            <div className='sidebar-center-col'>
              <p>GitHub</p>
            </div>
          </div>
        </a>

        <a
          className='sidebar-link'
          href='https://linkedin.com/in/jon-zamora-97a8a6219/'
          target='_blank'
        >
          <div className='sidebar-row'>
            <div className='sidebar-left-col'>
              <i className='fab fa-linkedin'></i>
            </div>
            <div className='sidebar-center-col'>
              <p>LinkedIn</p>
            </div>
          </div>
        </a>

        <a
          className='sidebar-link'
          href='http://mixcloud.com/jonzamora'
          target='_blank'
        >
          <div className='sidebar-row'>
            <div className='sidebar-left-col'>
              <i className='fas fa-headphones'></i>
            </div>
            <div className='sidebar-center-col'>
              <p>Mixcloud</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
