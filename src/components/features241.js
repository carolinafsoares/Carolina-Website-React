import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features241.css'

const Features241 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features241-container2 thq-section-max-width">
        <div className="features241-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features241-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features241-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features241-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features241-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features241-tab-horizontal1"
          >
            <div className="features241-divider-container1">
              {activeTab === 0 && (
                <div className="features241-container3"></div>
              )}
            </div>
            <div className="features241-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features241-tab-horizontal2"
          >
            <div className="features241-divider-container2">
              {activeTab === 1 && (
                <div className="features241-container4"></div>
              )}
            </div>
            <div className="features241-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features241-tab-horizontal3"
          >
            <div className="features241-divider-container3">
              {activeTab === 2 && (
                <div className="features241-container5"></div>
              )}
            </div>
            <div className="features241-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features241.defaultProps = {
  feature1Description:
    "Discover Carolina Soares's research and projects in neuroscience",
  feature3Description:
    "Engage with Carolina Soares's Science & Philosophy Podcast",
  feature2ImgAlt: 'Image illustrating the interactive CV',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Science & Philosophy Podcast',
  feature1Title: 'Neuroscience Work',
  feature2Title: 'Interactive CV',
  feature1ImgAlt: "Image showcasing Carolina Soares's work in neuroscience",
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1652337676333-3a52661ad81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1701009796009-381d273bd38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: "Explore Carolina Soares's interactive CV",
  feature3ImgAlt: 'Image representing the Science & Philosophy Podcast',
}

Features241.propTypes = {
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features241
