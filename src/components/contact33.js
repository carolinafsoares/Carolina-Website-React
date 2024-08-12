import React from 'react'

import PropTypes from 'prop-types'

import './contact33.css'

const Contact33 = (props) => {
  return (
    <div className="contact33-contact20 thq-section-padding">
      <div className="contact33-max-width thq-section-max-width">
        <div className="contact33-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact33-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
          </div>
        </div>
        <div className="contact33-row">
          <div className="contact33-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact33-contact-info1">
              <div className="contact33-content3">
                <h3 className="contact33-text3 thq-heading-3">Email</h3>
              </div>
              <span className="contact33-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact33-content4">
            <div className="contact33-contact-info2">
              <div className="contact33-content5"></div>
            </div>
          </div>
          <div className="contact33-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact33-contact-info3">
              <div className="contact33-content7">
                <h3 className="contact33-text4 thq-heading-3">Office</h3>
              </div>
              <span className="contact33-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact33.defaultProps = {
  content2: 'Get in touch with us today!',
  email1: 'carolina.de_fonseca_soares@kcl.ac.uk',
  heading1: 'Contact us',
  address1: 'London',
}

Contact33.propTypes = {
  content2: PropTypes.string,
  email1: PropTypes.string,
  heading1: PropTypes.string,
  address1: PropTypes.string,
}

export default Contact33
