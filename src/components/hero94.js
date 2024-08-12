import React from 'react'

import PropTypes from 'prop-types'

import './hero94.css'

const Hero94 = (props) => {
  return (
    <div className="hero94-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero94-image"
      />
      <div className="hero94-container"></div>
      <div className="hero94-max-width thq-section-max-width">
        <div className="hero94-content">
          <h1 className="hero94-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero94-text2 thq-body-large">{props.content1}</p>
          <div className="hero94-actions">
            <button className="thq-button-filled hero94-button1">
              <span className="hero94-text3 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline hero94-button2">
              <span className="hero94-text4 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero94.defaultProps = {
  content1: 'Exploring the intersection of science and philosophy',
  image1Src:
    'https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Carolina Soares, Neuroscience PhD Student',
  action2: 'Support her work',
  action1: 'Follow on social media',
  image1Alt: 'Carolina Soares',
}

Hero94.propTypes = {
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero94
