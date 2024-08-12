import React from 'react'

import PropTypes from 'prop-types'

import './contact32.css'

const Contact32 = (props) => {
  return (
    <div className="contact32-contact20 thq-section-padding">
      <div className="contact32-max-width thq-section-max-width">
        <div className="contact32-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact32-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact32-text3 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact32-row">
          <div className="contact32-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact32-contact-info1">
              <div className="contact32-content3">
                <h3 className="contact32-text4 thq-heading-3">Email</h3>
                <p className="contact32-text5 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <span className="contact32-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact32-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact32-contact-info2">
              <div className="contact32-content5">
                <h3 className="contact32-text6 thq-heading-3">Phone</h3>
                <p className="contact32-text7 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span className="contact32-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
          <div className="contact32-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact32-contact-info3">
              <div className="contact32-content7">
                <h3 className="contact32-text8 thq-heading-3">Office</h3>
                <p className="contact32-text9 thq-body-large">
                  {props.content5}
                </p>
              </div>
              <span className="contact32-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact32.defaultProps = {
  email1: 'carolinasoares@email.com',
  heading1: 'Contact Carolina Soares',
  content3: 'Twitter: @carolinasoares',
  phone1: '+1234567890',
  content5: 'Looking forward to hearing from you!',
  content1:
    'Feel free to reach out for collaborations, inquiries, or just to say hello!',
  address1: '123 Main Street, City, Country',
  content4: 'LinkedIn: linkedin.com/in/carolinasoares',
  content2: 'You can also connect with Carolina on social media:',
}

Contact32.propTypes = {
  email1: PropTypes.string,
  heading1: PropTypes.string,
  content3: PropTypes.string,
  phone1: PropTypes.string,
  content5: PropTypes.string,
  content1: PropTypes.string,
  address1: PropTypes.string,
  content4: PropTypes.string,
  content2: PropTypes.string,
}

export default Contact32
