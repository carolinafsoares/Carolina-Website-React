import React from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content1">
          <div className="features18-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features18-content2">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1ImageAlt: 'Podcast microphone',
  feature1Title: 'Science & Philosophy Podcast',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYzODA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Join me on my podcast where we delve into thought-provoking discussions on the latest scientific discoveries and their philosophical implications.',
  feature1Slogan: 'Exploring the intersection of science and philosophy',
}

Features18.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Slogan: PropTypes.string,
}

export default Features18
