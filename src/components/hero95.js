import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero95.css'

const Hero95 = (props) => {
  return (
    <div className="hero95-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero95-image"
      />
      <div className="hero95-container"></div>
      <div className="hero95-max-width thq-section-max-width">
        <div className="hero95-content">
          <h1 className="hero95-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero95-text2 thq-body-large">{props.content1}</p>
          <div className="hero95-actions">
            <button className="thq-button-filled hero95-button1">
              <a
                href="mailto:carolina.de_fonseca_soares@kcl.ac.uk?subject="
                className="hero95-text3 thq-body-small"
              >
                {props.action1}
              </a>
            </button>
            <button className="thq-button-outline hero95-button2">
              <Link to="/cv" className="hero95-text4 thq-body-small">
                {props.action2}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero95.defaultProps = {
  heading1: 'Projects',
  action1: 'Have an idea? Get in touch!',
  action2: 'CV',
  image1Alt: 'image',
  content1:
    "Aside from my PhD and Podcast I am have an avid interest in women's health. Do get in touch if you would like to explore a project together in this area. Interests in entrepreneurship, policy making, consulting and VCs.",
  image1Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTMyODU4OTZ8MA&ixlib=rb-4.0.3&w=1500',
}

Hero95.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero95
