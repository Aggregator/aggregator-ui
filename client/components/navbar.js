import React from 'react'

import {SocialNotifications} from 'material-ui/lib/svg-icons'

export default class Navbar extends React.Component{
  render () {
    return (
      <nav className="teal">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Aggregator</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <SocialNotifications />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

