import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content2">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text4 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  faq4Question: 'How can I support your work?',
  faq1Answer:
    'I am currently a neuroscience PhD student with a focus on neurobiology and cognitive neuroscience.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq3Question: 'Do you have any outreach projects or activities?',
  heading1: 'FAQs',
  heading2: 'Still have a question?',
  faq5Answer:
    'You can follow my latest updates on Twitter and LinkedIn through the widgets provided on this website.',
  faq4Answer:
    "You can support my work by contributing to my 'buy me a coffee' fund or by engaging with my content on social media.",
  action1: 'Contact',
  faq5Question: 'Where can I follow your updates?',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq3Answer:
    'Yes, I have been actively involved in various outreach projects related to science education and communication.',
  faq1Question: 'What is your background in neuroscience?',
  faq2Question: 'Can I contact you for freelance work or consultation?',
  faq2Answer:
    'Yes, I am open to freelance work, consultation, and entrepreneurship ideas. Feel free to reach out to discuss potential projects.',
}

FAQ1.propTypes = {
  faq4Question: PropTypes.string,
  faq1Answer: PropTypes.string,
  content1: PropTypes.string,
  faq3Question: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  action1: PropTypes.string,
  faq5Question: PropTypes.string,
  content2: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq1Question: PropTypes.string,
  faq2Question: PropTypes.string,
  faq2Answer: PropTypes.string,
}

export default FAQ1
