import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text3 thq-heading-3">{props.location1}</h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact10-container3">
              <span className="thq-body-small thq-button-flat">
                Get directions
              </span>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text6 thq-heading-3">{props.location2}</h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact10-container5">
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

Contact10.defaultProps = {
  location2ImageAlt: 'Social media icons',
  location1Description: 'Preferred method of contact',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1586210477741-f3d7dc250c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Get in Touch',
  location2Description:
    'Connect on social media platforms for updates and discussions',
  location2: 'Social Media: @neuroscience_phd',
  location1: 'Email: neuroscience.phd@student.com',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1695427866655-4a80d54a9fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageAlt: 'Email icon',
  content1:
    'Feel free to reach out for collaborations, inquiries, or just to say hello!',
}

Contact10.propTypes = {
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  location2Description: PropTypes.string,
  location2: PropTypes.string,
  location1: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.string,
}

export default Contact10
