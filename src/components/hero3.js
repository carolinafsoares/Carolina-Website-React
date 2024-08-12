import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-header9">
      <h1 className="hero3-text1 thq-heading-1">{props.heading1}</h1>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero3-placeholder-image thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-flex-row thq-section-max-width">
          <div className="hero3-column1"></div>
          <div className="hero3-column2">
            <div className="hero3-actions">
              <button className="thq-button-filled hero3-button1">
                <span className="hero3-text2 thq-body-small">
                  {props.action1}
                </span>
              </button>
              <button className="thq-button-outline hero3-button2">
                <span className="hero3-text3 thq-body-small">
                  {props.action2}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  content1: 'View my CV',
  image1Src: '/img_4535%204-1500w.jpg',
  action1: 'View my CV',
  image1Alt: 'Neuroscience PhD student',
  action2: 'Learn more about my podcast',
  heading1: 'Carolina Soares',
}

Hero3.propTypes = {
  content1: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero3
