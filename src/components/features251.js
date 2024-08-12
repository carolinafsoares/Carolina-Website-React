import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features251.css'

const Features251 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features251-container2 thq-section-max-width">
        <div className="features251-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features251-tab-horizontal1"
          >
            <div className="features251-divider-container1">
              {activeTab === 0 && (
                <div className="features251-container3"></div>
              )}
            </div>
            <div className="features251-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features251-tab-horizontal2"
          >
            <div className="features251-divider-container2">
              {activeTab === 1 && (
                <div className="features251-container4"></div>
              )}
            </div>
            <div className="features251-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features251-tab-horizontal3"
          >
            <div className="features251-divider-container3">
              {activeTab === 2 && (
                <div className="features251-container5"></div>
              )}
            </div>
            <div className="features251-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features251-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features251-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features251-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features251-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features251.defaultProps = {
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1618453582473-80ae837d762b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    "Navigate through Carolina's interactive CV to learn about her academic background, publications, and achievements.",
  feature1ImgAlt: 'Image depicting neuroscience research',
  feature3ImgAlt: 'Image symbolizing science & philosophy podcast',
  feature2Title: 'Interactive CV',
  feature1Description:
    "Explore Carolina's latest findings and research projects in the field of neuroscience.",
  feature3Description:
    "Tune in to Carolina's podcast where she delves into the intersection of science and philosophy, discussing thought-provoking topics with experts.",
  feature1Title: 'Neuroscience Research',
  feature2ImgAlt: 'Image representing interactive CV',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1699500325919-8d5aaf21d0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Science & Philosophy Podcast',
}

Features251.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features251
