import React from 'react'

import PropTypes from 'prop-types'

import './features171.css'

const Features171 = (props) => {
  return (
    <div className="features171-layout349 thq-section-padding">
      <div className="features171-max-width thq-section-max-width">
        <div className="features171-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="features171-content1">
          <div className="features171-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features171-content2">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features171.defaultProps = {
  feature1Slogan: 'Highlight your achievements in a dynamic way',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1486825586573-7131f7991bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYzODA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Interactive CV Showcase',
  feature1ImageAlt: 'Interactive CV Showcase Image',
  feature1Description:
    'Showcase your CV in an engaging and interactive format to impress visitors.',
}

Features171.propTypes = {
  feature1Slogan: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features171
