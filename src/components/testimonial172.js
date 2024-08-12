import React from 'react'

import PropTypes from 'prop-types'

import './testimonial172.css'

const Testimonial172 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial172-max-width thq-section-max-width">
        <div className="testimonial172-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial172-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial172-card1"
              >
                <div className="testimonial172-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial172-image1"
                  />
                  <div className="testimonial172-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial172-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial172-card2"
              >
                <div className="testimonial172-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial172-image2"
                  />
                  <div className="testimonial172-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial172-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial172-card3"
              >
                <div className="testimonial172-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial172-image3"
                  />
                  <div className="testimonial172-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial172-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial172-card4"
              >
                <div className="testimonial172-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial172-image4"
                  />
                  <div className="testimonial172-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial172-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial172.defaultProps = {
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  heading1: 'Testimonials',
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  review4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author2Position: 'Position, Company name',
  author1Name: 'Author Name',
  author1Alt: 'image',
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author3Alt: 'image',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author2Alt: 'image',
  author3Position: 'Position, Company name',
  author2Name: 'Author Name',
  author1Position: 'Position, Company name',
  review3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author4Alt: 'image',
  review2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  review1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author4Position: 'Position, Company name',
  author4Name: 'Author Name',
  author3Name: 'Author Name',
}

Testimonial172.propTypes = {
  author3Src: PropTypes.string,
  heading1: PropTypes.string,
  author1Src: PropTypes.string,
  review4: PropTypes.string,
  author4Src: PropTypes.string,
  author2Position: PropTypes.string,
  author1Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Alt: PropTypes.string,
  content1: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author2Name: PropTypes.string,
  author1Position: PropTypes.string,
  review3: PropTypes.string,
  author4Alt: PropTypes.string,
  review2: PropTypes.string,
  review1: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  author3Name: PropTypes.string,
}

export default Testimonial172
