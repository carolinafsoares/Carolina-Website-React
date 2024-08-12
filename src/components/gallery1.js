import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text1 thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text2 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image2Src:
    'https://images.unsplash.com/photo-1611532736573-418fe4ae3260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYzODA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1494883759339-0b042055a4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYzODA5OHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Photo Gallery of the Services you provide',
  content1:
    'Image from a recent Science & Philosophy podcast event where I discussed the intersection of science and philosophy.',
  image2Alt: 'Neuroscience Outreach Workshop',
  image3Alt: 'Entrepreneurship Project Presentation',
  image1Alt: 'Science & Philosophy Podcast Event',
  image1Src:
    'https://images.unsplash.com/photo-1646325782331-6dc047172a76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjYzODA5OXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery1.propTypes = {
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Gallery1
