import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text2">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content1">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content4 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button1">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features1-button2">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1Title: 'Science & Philosophy Podcast',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1697059455153-b7d86852495f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODE3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription:
    "Explore the key features of the Neuroscience PhD student's website.",
  slogan: 'Bridging Science & Philosophy',
  feature1ImageAlt: 'Science & Philosophy Podcast Image',
  feature2Description:
    "Explore the host's academic journey, research interests, and achievements through an interactive CV.",
  feature2ImageAlt: 'Interactive CV Image',
  feature1Description:
    'Listen to thought-provoking discussions on various topics at the intersection of science and philosophy.',
  secondaryAction:
    "Discover more about the host's freelance work and consultation services.",
  sectionTitle: 'Features',
  feature2ImageSrc:
    'https://images.unsplash.com/1/type-away.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODE3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    "Engage with the host's initiatives aimed at promoting science education and awareness in the community.",
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1578341596008-c879d0735730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODE3OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageAlt: 'Outreach Projects Image',
  feature3Title: 'Outreach Projects',
  feature2Title: 'Interactive CV',
  mainAction:
    'Support the host by contributing to their fund or engaging with their content on social media.',
}

Features1.propTypes = {
  feature1Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  mainAction: PropTypes.string,
}

export default Features1
