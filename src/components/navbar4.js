import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <div className="navbar4-container">
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <span className="navbar4-text">{props.text}</span>
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links1">
            <span className="navbar4-link11 thq-body-small thq-link">
              {props.link1}
            </span>
            <Link to="/ph-d" className="navbar4-link31 thq-body-small thq-link">
              {props.link3}
            </Link>
            <Link
              to="/podcast"
              className="navbar4-link41 thq-body-small thq-link"
            >
              {props.link4}
            </Link>
            <Link to="/projects" className="navbar4-projects">
              {props.text1}
            </Link>
            <Link to="/cv" className="navbar4-link21 thq-body-small thq-link">
              {props.link2}
            </Link>
            <span className="navbar4-link51 thq-body-small thq-link">
              {props.link5}
            </span>
          </nav>
          <div className="navbar4-buttons1">
            <button className="thq-button-filled">{props.action1}</button>
            <button className="thq-button-outline">{props.action2}</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links2">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar4-buttons2">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar4.defaultProps = {
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link2: 'CV',
  logoAlt: 'logo',
  action2: 'Download CV',
  link1: 'Home',
  text1: 'Projects',
  action1: 'Go to Home section',
  text: 'CS',
  link4: 'Podcast',
  link3: 'PhD',
  link5: 'Contact',
}

Navbar4.propTypes = {
  logoSrc: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
  action2: PropTypes.string,
  link1: PropTypes.string,
  text1: PropTypes.string,
  action1: PropTypes.string,
  text: PropTypes.string,
  link4: PropTypes.string,
  link3: PropTypes.string,
  link5: PropTypes.string,
}

export default Navbar4
