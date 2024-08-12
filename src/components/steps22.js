import React from 'react'

import PropTypes from 'prop-types'

import './steps22.css'

const Steps22 = (props) => {
  return (
    <div
      className={`steps22-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps22-max-width thq-section-max-width">
        <div className="steps22-container2 thq-grid-2">
          <div className="steps22-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps22-actions">
              <button className="thq-button-filled thq-button-animated steps22-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps22-container3">
            <div className="steps22-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps22-text14 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps22-text15 thq-heading-3">01</label>
            </div>
            <div className="steps22-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps22-text17 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps22-text18 thq-heading-3">02</label>
            </div>
            <div className="steps22-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps22-text20 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps22-text21 thq-heading-3">03</label>
            </div>
            <div className="steps22-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps22-text23 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps22-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps22.defaultProps = {
  step4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  step1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  rootClassName: '',
  step4Title: 'Step 4',
  step3Title: 'Step 3',
  step1Title: 'Step 1',
  step2Title: 'Step 2',
  step2Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  step3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
}

Steps22.propTypes = {
  step4Description: PropTypes.string,
  step1Description: PropTypes.string,
  rootClassName: PropTypes.string,
  step4Title: PropTypes.string,
  step3Title: PropTypes.string,
  step1Title: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step3Description: PropTypes.string,
}

export default Steps22
