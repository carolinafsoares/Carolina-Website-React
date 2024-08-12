import React from 'react'

import PropTypes from 'prop-types'

import './cta261.css'

const CTA261 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta261-accent2-bg">
          <div className="cta261-accent1-bg">
            <div className="cta261-container2">
              <div className="cta261-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta261-actions">
                <button
                  type="button"
                  className="thq-button-filled cta261-button"
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

CTA261.defaultProps = {
  content1:
    "If you enjoy Carolina's content and would like to support her work in neuroscience, consider making a donation or becoming a patron.",
  action1: 'Support Now',
  heading1: "Support Carolina's Work",
}

CTA261.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default CTA261
