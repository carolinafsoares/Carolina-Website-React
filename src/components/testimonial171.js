import React from 'react'

import PropTypes from 'prop-types'

import './testimonial171.css'

const Testimonial171 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial171-max-width thq-section-max-width">
        <div className="testimonial171-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial171-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card1"
              >
                <div className="testimonial171-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial171-image1"
                  />
                  <div className="testimonial171-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card2"
              >
                <div className="testimonial171-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial171-image2"
                  />
                  <div className="testimonial171-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card3"
              >
                <div className="testimonial171-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial171-image3"
                  />
                  <div className="testimonial171-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial171-card4"
              >
                <div className="testimonial171-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial171-image4"
                  />
                  <div className="testimonial171-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial171-text23 thq-body-small">
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

Testimonial171.defaultProps = {
  review3:
    "I love listening to Carolina's Science & Philosophy Podcast. It's both informative and thought-provoking.",
  review2:
    "Carolina's ability to bridge the gap between science and philosophy is truly remarkable.",
  content1:
    "Carolina's expertise in neuroscience is unparalleled. Her insights have greatly influenced my own research.",
  author1Alt: 'Image of John Doe',
  author2Position: 'Philosopher',
  author3Name: 'David Johnson',
  author3Position: 'Podcast Listener',
  author2Name: 'Jane Smith',
  review4:
    'Working with Carolina on a freelance project was a fantastic experience. Her professionalism and dedication are unmatched.',
  author3Src:
    'https://images.unsplash.com/photo-1492288991661-058aa541ff43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Neuroscientist',
  heading1: 'Testimonials',
  author4Position: 'Freelance Client',
  review1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author1Name: 'John Doe',
  author4Src:
    'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of David Johnson',
  author1Src:
    'https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author2Src:
    'https://images.unsplash.com/photo-1636622433525-127afdf3662d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTYwMTI5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Emily Brown',
  author4Alt: 'Image of Emily Brown',
}

Testimonial171.propTypes = {
  review3: PropTypes.string,
  review2: PropTypes.string,
  content1: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author3Name: PropTypes.string,
  author3Position: PropTypes.string,
  author2Name: PropTypes.string,
  review4: PropTypes.string,
  author3Src: PropTypes.string,
  author1Position: PropTypes.string,
  heading1: PropTypes.string,
  author4Position: PropTypes.string,
  review1: PropTypes.string,
  author1Name: PropTypes.string,
  author4Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author4Name: PropTypes.string,
  author4Alt: PropTypes.string,
}

export default Testimonial171
