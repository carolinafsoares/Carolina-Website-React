import React from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-filled thq-button-animated steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps2-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps2-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps2-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps2-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Description:
    "Show your support by engaging with content on social media, contributing to the creator's freelance work, or booking consultation services.",
  step4Title: 'Support the Creator',
  step3Description:
    'Navigate through an interactive CV highlighting academic achievements, research experience, and publications.',
  step1Title: 'Listen to the Podcast',
  step2Title: 'Explore Projects',
  step2Description:
    'Discover innovative projects and research initiatives undertaken by the creator, showcasing a blend of science and philosophy.',
  step1Description:
    'Tune in to engaging conversations on the intersection of Science & Philosophy hosted by a neuroscience PhD student.',
  step3Title: 'Interactive CV',
}

Steps2.propTypes = {
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
  step3Description: PropTypes.string,
  step1Title: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Description: PropTypes.string,
  step3Title: PropTypes.string,
}

export default Steps2
