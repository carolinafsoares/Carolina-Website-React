import React from 'react'

import PropTypes from 'prop-types'

import './steps21.css'

const Steps21 = (props) => {
  return (
    <div className="steps21-container1 thq-section-padding">
      <div className="steps21-max-width thq-section-max-width">
        <div className="steps21-container2 thq-grid-2">
          <div className="steps21-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps21-actions">
              <button className="thq-button-filled thq-button-animated steps21-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps21-container3">
            <div className="steps21-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps21-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps21-text15 thq-heading-3">01</label>
            </div>
            <div className="steps21-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps21-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps21-text18 thq-heading-3">02</label>
            </div>
            <div className="steps21-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps21-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps21-text21 thq-heading-3">03</label>
            </div>
            <div className="steps21-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps21-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps21-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps21.defaultProps = {
  step4Title: 'Engage and Support',
  step2Description:
    "Navigate through Carolina's academic journey, publications, and achievements in an interactive format.",
  step3Description:
    "Listen to Carolina's podcast where she explores the intersection between science and philosophy, discussing thought-provoking topics.",
  step3Title: 'Science & Philosophy Podcast',
  step1Title: 'Explore Neuroscience Research',
  step1Description:
    "Discover Carolina's latest research projects and findings in the field of neuroscience.",
  step2Title: 'Interactive CV',
  step4Description:
    "Engage with Carolina's content, support her through freelance opportunities, or connect with her on social media platforms.",
}

Steps21.propTypes = {
  step4Title: PropTypes.string,
  step2Description: PropTypes.string,
  step3Description: PropTypes.string,
  step3Title: PropTypes.string,
  step1Title: PropTypes.string,
  step1Description: PropTypes.string,
  step2Title: PropTypes.string,
  step4Description: PropTypes.string,
}

export default Steps21
