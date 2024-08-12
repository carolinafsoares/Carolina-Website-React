import React from 'react'

import PropTypes from 'prop-types'

import './features12.css'

const Features12 = (props) => {
  return (
    <div className="features12-layout251 thq-section-padding">
      <div className="features12-max-width thq-section-max-width">
        <div className="thq-flex-row features12-section-title">
          <div className="features12-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features12-text2">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features12-content1">
          <div className="features12-row thq-flex-row">
            <div className="features12-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features12-feature1-image"
              />
              <div className="features12-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features12-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features12-feature2-image"
              />
              <div className="features12-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features12-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features12-feature3-image"
              />
              <div className="features12-content4 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features12-actions">
          <button className="thq-button-filled features12-button1">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features12-button2">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features12.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1632454005805-7bee57f76ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODYxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: 'Features',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1485368510545-b1f4bcd02d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODYxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Freelance Services Image',
  feature3Title: 'Engage with Content',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1585688584999-d54fe64e6c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODYxMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Interactive CV Showcase Image',
  feature2Description:
    'Hire Carolina for freelance work or consultation services in neuroscience and related fields',
  sectionDescription: "Explore the key features of Carolina Soares' platform",
  mainAction: 'Discover Projects',
  feature3Description:
    "Explore Carolina's projects, listen to her podcast, and stay updated on the latest in science and philosophy",
  secondaryAction: 'Listen to Podcast',
  feature3ImageAlt: 'Engage with Content Image',
  feature1Description:
    "Navigate through Carolina's academic and professional journey with an interactive CV showcase",
  feature2Title: 'Freelance Services',
  feature1Title: 'Interactive CV Showcase',
  slogan: 'Empowering Minds through Science and Philosophy',
}

Features12.propTypes = {
  feature1ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  sectionDescription: PropTypes.string,
  mainAction: PropTypes.string,
  feature3Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features12
