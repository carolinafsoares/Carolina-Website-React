import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text2 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button1">
              <a
                href="https://podcasters.spotify.com/pod/show/neuroverse9"
                target="_blank"
                rel="noreferrer noopener"
                className="hero9-text3 thq-body-small"
              >
                {props.action1}
              </a>
            </button>
            <button className="thq-button-outline hero9-button2">
              <a
                href="https://www.neuroversepod.com"
                target="_blank"
                rel="noreferrer noopener"
                className="hero9-text4 thq-body-small"
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

Hero9.defaultProps = {
  action2: 'Discover More',
  image1Src:
    'https://images.unsplash.com/photo-1695427866655-4a80d54a9fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODE3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Neuroscience PhD student exploring science and philosophy',
  content1:
    'Listen to Neuroverse, a podcast about Neuroscience, Biochemistry, Philosophy and beyond.',
  heading1: 'Exploring the Intersection of Science and Philosophy',
  action1: 'Listen to the Podcast',
}

Hero9.propTypes = {
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero9
