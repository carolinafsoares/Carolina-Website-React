import React from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout251 thq-section-padding">
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features11-text2">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features11-content1">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content4 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions">
          <button className="thq-button-filled features11-button1">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          <button className="thq-button-outline features11-button2">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  feature2Description:
    'Discover the latest projects and research endeavors undertaken by the neuroscience PhD student.',
  sectionDescription: 'Explore the key features of the website',
  feature2ImageAlt: 'Projects Showcase Image',
  mainAction: 'Explore Interactive CV',
  feature3Title: 'Two-photon Imaging',
  feature2Title: 'Neuropixels',
  feature3ImageAlt: 'Freelance Work & Consultation Services Image',
  feature1ImageAlt: 'Science & Philosophy Podcast Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1699200746675-8e4de41b9e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODUwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1562819790-07f475689019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODUwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Predictive Coding',
  feature1Description:
    'Listen to thought-provoking discussions on various topics at the intersection of science and philosophy.',
  sectionTitle: 'Systems Neuroscience',
  feature3Description:
    'Hire the neuroscience PhD student for freelance work or consultation services related to neuroscience, philosophy, or podcasting.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1655635643568-f30d5abc618a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODUwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Support the Creator',
  slogan: 'High-throughput neural recordings of behavioural activity',
}

Features11.propTypes = {
  feature2Description: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  mainAction: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  slogan: PropTypes.string,
}

export default Features11
