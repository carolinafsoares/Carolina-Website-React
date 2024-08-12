import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
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

Testimonial17.defaultProps = {
  author2Src:
    'https://images.unsplash.com/photo-1600783486189-553f6a73f6f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    'I hired the neuroscience PhD student for a consultation on a project, and I was impressed by their insights and professionalism. I look forward to working with them again in the future.',
  author1Name: 'John Doe',
  author2Position: 'Research Scientist at Institute Y',
  content1:
    'Read what others have to say about their experience working with me.',
  author2Name: 'Jane Smith',
  author2Alt: 'Image of Jane Smith, Research Scientist at Institute Y',
  author4Name: 'Emily Brown',
  review4:
    "As a fellow academic, I appreciate the depth of knowledge and passion for science and philosophy that the neuroscience PhD student brings to their work. It's refreshing to see such interdisciplinary collaboration.",
  review1:
    'Working with the neuroscience PhD student was a game-changer for our project. Their expertise and dedication to detail truly set them apart.',
  author1Alt: 'Image of John Doe, CEO of Tech Company X',
  review2:
    'I had the pleasure of being a guest on the Science & Philosophy podcast hosted by the neuroscience PhD student. It was a fantastic experience, and I highly recommend tuning in!',
  author4Alt: 'Image of Emily Brown, Philosophy Professor at University Z',
  author4Position: 'Philosophy Professor at University Z',
  author3Alt: 'Image of Alex Johnson, Freelance Writer',
  author1Position: 'CEO of Tech Company X',
  author3Name: 'Alex Johnson',
  heading1: 'Testimonials',
  author3Src:
    'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1584428018260-1a9bc0e15365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: 'Freelance Writer',
  author1Src:
    'https://images.unsplash.com/photo-1551829714-729df766a145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTU5ODU0Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author2Src: PropTypes.string,
  review3: PropTypes.string,
  author1Name: PropTypes.string,
  author2Position: PropTypes.string,
  content1: PropTypes.string,
  author2Name: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Name: PropTypes.string,
  review4: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
  review2: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author3Name: PropTypes.string,
  heading1: PropTypes.string,
  author3Src: PropTypes.string,
  author4Src: PropTypes.string,
  author3Position: PropTypes.string,
  author1Src: PropTypes.string,
}

export default Testimonial17
