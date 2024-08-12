import React from 'react'

import PropTypes from 'prop-types'

import './contact102.css'

const Contact102 = (props) => {
  return (
    <div className="contact102-container1 thq-section-padding">
      <div className="contact102-max-width thq-section-max-width">
        <div className="contact102-content1 thq-flex-row">
          <div className="contact102-content2">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact102-content3 thq-flex-row">
          <div className="contact102-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact102-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact102-text3 thq-heading-3">
              {props.location1}
            </h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact102-container3">
              <span className="thq-body-small thq-button-flat">
                Get directions
              </span>
            </div>
          </div>
          <div className="contact102-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact102-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact102-text6 thq-heading-3">
              {props.location2}
            </h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact102-container5">
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

Contact102.defaultProps = {
  location1: 'Bucharest',
  location2ImageAlt: 'image2Alt',
  heading1: 'Locations',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  location2: 'Cluj - Napoca',
  location1ImageAlt: 'image1Alt',
  location1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  location2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
}

Contact102.propTypes = {
  location1: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location2: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1Description: PropTypes.string,
  content1: PropTypes.string,
  location2Description: PropTypes.string,
}

export default Contact102
