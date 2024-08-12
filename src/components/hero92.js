import React from 'react'

import PropTypes from 'prop-types'

import './hero92.css'

const Hero92 = (props) => {
  return (
    <div className="hero92-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero92-image"
      />
      <div className="hero92-container"></div>
      <div className="hero92-max-width thq-section-max-width">
        <div className="hero92-content">
          <h1 className="hero92-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero92-text2 thq-body-large">{props.content1}</p>
          <div className="hero92-actions">
            <button className="thq-button-filled hero92-button1">
              <span className="hero92-text3 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline hero92-button2">
              <span className="hero92-text4 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero92.defaultProps = {
  action1: 'Get in Touch',
  heading1: "Welcome to Carolina Soares's Platform",
  action2: 'Learn More',
  image1Alt: 'Carolina Soares Image',
  image1Src:
    'https://images.unsplash.com/photo-1673280401338-f62e92db6d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODYxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Explore the intersection of science and philosophy through the eyes of a neuroscience PhD student.',
}

Hero92.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero92
