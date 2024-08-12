import React from 'react'

import PropTypes from 'prop-types'

import './features22.css'

const Features22 = (props) => {
  return (
    <div className="features22-layout349 thq-section-padding">
      <div className="features22-max-width thq-section-max-width">
        <div className="features22-container1">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features22-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="features22-container2 thq-grid-auto-300">
          <div className="features22-card1 thq-card thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features22-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features22-text13 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features22-card2 thq-card thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features22-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features22-text15 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features22-card3 thq-card thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features22-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature3Title}</h1>
            <span className="features22-text17 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features22-card4 thq-card thq-flex-column">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features22-image4 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature4Title}</h1>
            <span className="features22-text19 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features22-card5 thq-card thq-flex-column">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features22-image5 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature5Title}</h1>
            <span className="features22-text21 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features22-card6 thq-card thq-flex-column">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features22-image6 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature6Title}</h1>
            <span className="features22-text23 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
          <div className="features22-card7 thq-card thq-flex-column">
            <img
              alt={props.feature7ImageAlt}
              src={props.feature7ImageSrc}
              className="features22-image7 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature7Title}</h1>
            <span className="features22-text25 thq-body-small">
              {props.feature7Description}
            </span>
          </div>
          <div className="features22-card8 thq-card thq-flex-column">
            <img
              alt={props.feature8ImageAlt}
              src={props.feature8ImageSrc}
              className="features22-image8 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature8Title}</h1>
            <span className="features22-text27 thq-body-small">
              {props.feature8Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features22.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1571569080010-06cc1a54db4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Features',
  feature7ImageAlt: 'image',
  feature3Title: 'Science & Philosophy Podcast',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    "Navigate through Carolina's interactive CV to learn about her academic achievements and professional experience.",
  feature2ImageAlt: 'Interactive CV Image',
  feature5ImageAlt: 'Social Media Engagement Image',
  feature8Title: 'Feature #8',
  feature3ImageAlt: 'Science & Philosophy Podcast Image',
  feature7Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature8ImageAlt: 'image',
  feature6Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature7ImageSrc:
    'https://images.unsplash.com/photo-1709403338549-10e6b0e24c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: 'Neuroscience Research',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1692471739960-c3774e020798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature6ImageAlt: 'image',
  feature4ImageAlt: 'Freelance Work Image',
  feature4Description:
    'Support Carolina by hiring her for freelance projects related to neuroscience, writing, or podcast production.',
  feature5Title: 'Engagement on Social Media',
  feature7Title: 'Feature #7',
  feature6Title: 'Feature #6',
  feature4Title: 'Freelance Work Opportunities',
  feature1ImageAlt: 'Neuroscience Research Image',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1627441354515-4303da1c58c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Interactive CV',
  feature8Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature1Description:
    "Explore Carolina's groundbreaking research in the field of neuroscience.",
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3Description:
    "Tune in to Carolina's engaging podcast where she discusses the intersection of science and philosophy.",
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1701009793404-b27cafffb53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5Description:
    'Connect with Carolina on various social media platforms to stay updated on her latest projects and insights.',
}

Features22.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature8Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature7Description: PropTypes.string,
  feature8ImageAlt: PropTypes.string,
  feature6Description: PropTypes.string,
  feature7ImageSrc: PropTypes.string,
  feature1Title: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature4Description: PropTypes.string,
  feature5Title: PropTypes.string,
  feature7Title: PropTypes.string,
  feature6Title: PropTypes.string,
  feature4Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature8Description: PropTypes.string,
  feature1Description: PropTypes.string,
  content1: PropTypes.string,
  feature3Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature5Description: PropTypes.string,
}

export default Features22
