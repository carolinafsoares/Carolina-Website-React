import React from 'react'

import PropTypes from 'prop-types'

import './contact101.css'

const Contact101 = (props) => {
  return (
    <div className="contact101-container1 thq-section-padding">
      <div className="contact101-max-width thq-section-max-width">
        <div className="contact101-content1 thq-flex-row">
          <div className="contact101-content2">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact101-content3 thq-flex-row">
          <div className="contact101-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact101-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text3 thq-heading-3">
              {props.location1}
            </h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact101-container3">
              <span className="thq-body-small thq-button-flat">
                Get directions
              </span>
            </div>
          </div>
          <div className="contact101-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact101-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact101-text6 thq-heading-3">
              {props.location2}
            </h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact101-container5">
              <span className="thq-body-small thq-button-flat">
                Get directions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact101.defaultProps = {
  location1Description: 'Preferred method of contact',
  location2: 'Social Media: @carolinasoares',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1549925245-8a7a48495212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageAlt: 'Email icon',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1569980402540-d9a3ce35df21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  location2ImageAlt: 'Social media icons',
  heading1: 'Locations',
  location2Description: 'Connect with me on social media platforms',
  location1: 'Email: carolina.soares@email.com',
}

Contact101.propTypes = {
  location1Description: PropTypes.string,
  location2: PropTypes.string,
  content1: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  location2Description: PropTypes.string,
  location1: PropTypes.string,
}

export default Contact101
