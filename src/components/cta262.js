import React from 'react'

import PropTypes from 'prop-types'

import './cta262.css'

const CTA262 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="thq-section-max-width">
        <div className="cta262-accent2-bg">
          <div className="cta262-accent1-bg">
            <div className="cta262-container2">
              <div className="cta262-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta262-actions">
                <button
                  type="button"
                  className="thq-button-filled cta262-button"
                >
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA262.defaultProps = {
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  rootClassName: '',
  action1: 'Main Action',
  heading1: 'Medium length heading goes here',
}

CTA262.propTypes = {
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default CTA262
