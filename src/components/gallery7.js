import React from 'react'

import PropTypes from 'prop-types'

import './gallery7.css'

const Gallery7 = (props) => {
  return (
    <div className="gallery7-gallery3 thq-section-padding">
      <div className="gallery7-max-width">
        <div className="gallery7-section-title">
          <h2 className="gallery7-text1 thq-heading-2">{props.heading1}</h2>
          <span className="gallery7-text2 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery7-container1">
          <div className="gallery7-content">
            <div className="gallery7-container2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery7-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery7-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery7-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery7-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery7-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery7-image5 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery7-container4">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery7-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery7-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery7.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Outreach Project Event Photo',
  content1:
    "Explore images from Carolina Soares's work in neuroscience, podcast, CV, outreach projects, and more.",
  image6Alt: 'Science Communication Workshop Picture',
  image3Alt: 'Interactive CV Screenshot',
  image7Src:
    'https://images.unsplash.com/photo-1706759755831-bbbcca338f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Neuroscience Lab Experiment Image',
  heading1: 'Gallery',
  image1Alt: 'Neuroscience Research Poster',
  image2Alt: 'Science & Philosophy Podcast Cover Art',
  image3Src:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1603207731706-27c89b8a3c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1581093577421-f561a654a353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1569144157596-10825eecdde2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Neuroscience Conference Presentation Slide',
  image6Src:
    'https://images.unsplash.com/photo-1692699203646-bbc19c8c8c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMDk1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Gallery7.propTypes = {
  image1Src: PropTypes.string,
  image4Alt: PropTypes.string,
  content1: PropTypes.string,
  image6Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image5Alt: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image2Src: PropTypes.string,
  image4Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image6Src: PropTypes.string,
}

export default Gallery7
