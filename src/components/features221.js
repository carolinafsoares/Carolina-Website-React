import React from 'react'

import PropTypes from 'prop-types'

import './features221.css'

const Features221 = (props) => {
  return (
    <div className="features221-layout349 thq-section-padding">
      <div className="features221-max-width thq-section-max-width">
        <div className="features221-container1">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features221-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="features221-container2 thq-grid-auto-300">
          <div className="features221-card1 thq-card thq-flex-column">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features221-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features221-text13 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features221-card2 thq-card thq-flex-column">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features221-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features221-text15 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features221-card3 thq-card thq-flex-column">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features221-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature3Title}</h1>
            <span className="features221-text17 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features221-card4 thq-card thq-flex-column">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features221-image4 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature4Title}</h1>
            <span className="features221-text19 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features221-card5 thq-card thq-flex-column">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features221-image5 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature5Title}</h1>
            <span className="features221-text21 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features221-card6 thq-card thq-flex-column">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features221-image6 thq-img-ratio-1-1 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature6Title}</h1>
            <span className="features221-text23 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features221.defaultProps = {
  feature2Title: 'Ideas',
  feature4ImageAlt: 'image',
  feature4Title: 'Hormonal Health',
  heading1: "Women's Healthcare",
  feature6Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  content1:
    "Research into women's healthcare is crucial for addressing gender-specific health issues, improving medical treatments, and promoting overall well-being. By focusing on women's unique health needs, researchers can develop targeted interventions and personalized care plans that can lead to better health outcomes for women around the world.",
  feature1Title: 'Market Research',
  feature6Title: 'Feature #6',
  feature1ImageAlt: 'image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature5Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature3ImageAlt: 'image',
  feature4Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1605557626697-2e87166d88f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDYxOHww&ixlib=rb-4.0.3&w=1400',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature5ImageAlt: 'image',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1664251929714-8e4cbf0d075d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDY3M3ww&ixlib=rb-4.0.3&w=1400',
  feature2ImageAlt: 'image',
  feature1Description:
    "Answer a few equations to help inform market research into where the gaps are in women's healthcare",
  feature3Title: 'Microbiome Health',
  feature5Title: 'Fundamental Research & Clinical trials',
  feature6ImageAlt: 'image',
  feature2Description:
    "If you have an idea or would like to collaborate to launch a project addressing a critical issue in women's healthcare get in touch",
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1435820394963-a15297f976fd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDUxfHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MTE2Mnww&ixlib=rb-4.0.3&w=1400',
}

Features221.propTypes = {
  feature2Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature4Title: PropTypes.string,
  heading1: PropTypes.string,
  feature6Description: PropTypes.string,
  content1: PropTypes.string,
  feature1Title: PropTypes.string,
  feature6Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature5Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature4Description: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature5Title: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
}

export default Features221
