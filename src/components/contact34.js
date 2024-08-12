import React from 'react'

import PropTypes from 'prop-types'

import './contact34.css'

const Contact34 = (props) => {
  return (
    <div className="contact34-contact20 thq-section-padding">
      <div className="contact34-max-width thq-section-max-width">
        <div className="contact34-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact34-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact34-text3 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact34-row">
          <div className="contact34-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact34-contact-info1">
              <div className="contact34-content3">
                <h3 className="contact34-text4 thq-heading-3">Email</h3>
                <p className="contact34-text5 thq-body-large">
                  {props.content3}
                </p>
              </div>
              <span className="contact34-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact34-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact34-contact-info2">
              <div className="contact34-content5">
                <h3 className="contact34-text6 thq-heading-3">Phone</h3>
                <p className="contact34-text7 thq-body-large">
                  {props.content4}
                </p>
              </div>
              <span className="contact34-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
          <div className="contact34-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact34-contact-info3">
              <div className="contact34-content7">
                <h3 className="contact34-text8 thq-heading-3">Office</h3>
                <p className="contact34-text9 thq-body-large">
                  {props.content5}
                </p>
              </div>
              <span className="contact34-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact34.defaultProps = {
  phone1: '+1234567890',
  content1:
    'Feel free to reach out to Carolina Soares for collaborations, inquiries, or just to say hello!',
  content5: 'LinkedIn: linkedin.com/in/carolinasoares',
  content4: 'Twitter: @carolinasoares',
  content3: 'Instagram: @carolinasoares',
  address1: '123 Science Street, Philosophy Avenue, City, Country',
  heading1: 'Contact Carolina Soares',
  email1: 'carolina.soares@email.com',
  content2: 'You can also connect with Carolina on social media:',
}

Contact34.propTypes = {
  phone1: PropTypes.string,
  content1: PropTypes.string,
  content5: PropTypes.string,
  content4: PropTypes.string,
  content3: PropTypes.string,
  address1: PropTypes.string,
  heading1: PropTypes.string,
  email1: PropTypes.string,
  content2: PropTypes.string,
}

export default Contact34
