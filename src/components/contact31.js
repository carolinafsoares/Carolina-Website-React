import React from 'react'

import PropTypes from 'prop-types'

import './contact31.css'

const Contact31 = (props) => {
  return (
    <div className="contact31-contact20 thq-section-padding">
      <div className="contact31-max-width thq-section-max-width">
        <div className="contact31-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact31-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact31-text3 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact31-row">
          <div className="contact31-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact31-contact-info1">
              <div className="contact31-content3">
                <h3 className="contact31-text4 thq-heading-3">Email</h3>
              </div>
              <span className="contact31-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact31-content4">
            <div className="contact31-contact-info2">
              <div className="contact31-content5"></div>
            </div>
          </div>
          <div className="contact31-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact31-contact-info3">
              <div className="contact31-content7">
                <h3 className="contact31-text5 thq-heading-3">Office</h3>
                <p className="contact31-text6 thq-body-large">
                  {props.content5}
                </p>
              </div>
              <span className="contact31-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact31.defaultProps = {
  email1: 'carolina.de_fonseca_soares@kcl.ac.uk',
  content5: 'Looking forward to hearing from you!',
  address1: 'London',
  heading1: 'Get in Touch',
  content2: 'You can also connect with me on social media:',
  content1:
    'Feel free to reach out for collaborations, inquiries, or just to say hello!',
}

Contact31.propTypes = {
  email1: PropTypes.string,
  content5: PropTypes.string,
  address1: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
}

export default Contact31
