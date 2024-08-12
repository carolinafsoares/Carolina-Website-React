import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero172.css'

const Hero172 = (props) => {
  return (
    <div className="hero172-header78">
      <div className="hero172-column thq-section-padding thq-section-max-width">
        <div className="hero172-content1">
          <h1 className="hero172-text thq-heading-1">{props.heading1}</h1>
        </div>
      </div>
      <div className="hero172-content2">
        <div className="hero172-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal"></div>
        <div className="hero172-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero172-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero172-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero172-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero172-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero172-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero172-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero172-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero172-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero172-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero172-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero172-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero172-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero172-container2">
          <React.Fragment>
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n  @keyframes scroll-x {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(calc(-100% - 16px));\n    }\n  }\n\n  @keyframes scroll-y {\n    from {\n      transform: translateY(0);\n    }\n    to {\n      transform: translateY(calc(-100% - 16px));\n    }\n  }\n',
                }}
              />
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

Hero172.defaultProps = {
  image12Src:
    'https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&ixlib=rb-4.0.3&w=1500',
  heading1: 'Medium length hero headline goes here',
  image9Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image11Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image9Src:
    'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image10Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image8Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
}

Hero172.propTypes = {
  image12Src: PropTypes.string,
  heading1: PropTypes.string,
  image9Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image9Src: PropTypes.string,
  image10Src: PropTypes.string,
  image8Src: PropTypes.string,
}

export default Hero172
