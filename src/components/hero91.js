import React from 'react'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div className="hero91-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero91-image"
      />
      <div className="hero91-container"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-content">
          <h1 className="hero91-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero91-text2 thq-body-large">{props.content1}</p>
          <div className="hero91-actions">
            <button className="thq-button-filled hero91-button1">
              <a
                href="https://www.dkneurolab.com/people"
                target="_blank"
                rel="noreferrer noopener"
                className="hero91-text3 thq-body-small"
              >
                {props.action1}
              </a>
            </button>
            <button className="thq-button-outline hero91-button2">
              <a
                href="https://www.lido-dtp.ac.uk"
                target="_blank"
                rel="noreferrer noopener"
                className="hero91-text4 thq-body-small"
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

Hero91.defaultProps = {
  action2: 'LIDo',
  image1Alt: 'Neuroscience PhD Student Podcast',
  heading1: 'Neuroscience PhD Project',
  action1: 'Lab website',
  content1:
    "Carrying out a PhD in Systems Neuroscience at King's College London under Dimitar Kostadinov's supervision, funded by the BBSRC and part of the LIDo consortium.",
  image1Src:
    'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODUwN3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero91.propTypes = {
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero91
