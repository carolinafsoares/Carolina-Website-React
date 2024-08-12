import React from 'react'

import PropTypes from 'prop-types'

import './hero93.css'

const Hero93 = (props) => {
  return (
    <div className="hero93-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero93-image"
      />
      <div className="hero93-container"></div>
      <div className="hero93-max-width thq-section-max-width">
        <div className="hero93-content">
          <h1 className="hero93-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero93-text2 thq-body-large">{props.content1}</p>
          <div className="hero93-actions">
            <button className="thq-button-filled hero93-button1">
              <a
                href="https://podcasters.spotify.com/pod/show/neuroverse9"
                target="_blank"
                rel="noreferrer noopener"
                className="hero93-text3 thq-body-small"
              >
                {props.action1}
              </a>
            </button>
            <button className="thq-button-outline hero93-button2">
              <a
                href="https://www.neuroversepod.com"
                target="_blank"
                rel="noreferrer noopener"
                className="hero93-text4 thq-body-small"
              >
                {props.action2}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero93.defaultProps = {
  action2: 'Podcast website',
  image1Alt: 'image',
  heading1: 'Exploring the Intersection of Science and Philosophy',
  action1: 'Podcast',
  image1Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTMyODU4OTZ8MA&ixlib=rb-4.0.3&w=1500',
  content1:
    'Listen to Neuroverse, a podcast about Neuroscience, Biochemistry, Philosophy and beyond.',
}

Hero93.propTypes = {
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero93
