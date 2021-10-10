import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className='flex-col-center'>

        <h2>Ripple</h2>

        <div className='flex-row-center'>
          <NavLink to='/signup' exact className='' activeClassName=''>
            Sign Up
          </NavLink>&nbsp;
          <NavLink to='/login' exact className='' activeClassName=''>
            Log In
          </NavLink>
        </div>

      </div>
    )
  }
}
