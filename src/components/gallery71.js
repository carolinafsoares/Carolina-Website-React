import React from 'react'

import PropTypes from 'prop-types'

import './gallery71.css'

const Gallery71 = (props) => {
  return (
    <div className="gallery71-gallery3 thq-section-padding">
      <div className="gallery71-max-width">
        <div className="gallery71-section-title">
          <h2 className="gallery71-text1 thq-heading-2">{props.heading1}</h2>
          <span className="gallery71-text2 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery71-container1">
          <div className="gallery71-content">
            <div className="gallery71-container2">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="gallery71-image1 thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery71-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery71-container3">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery71-image3 thq-img-ratio-4-3"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery71-image4 thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="gallery71-image5 thq-img-ratio-4-3"
              />
            </div>
            <div className="gallery71-container4">
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="gallery71-image6 thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="gallery71-image7 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery71.defaultProps = {
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image7Src:
    'https://images.unsplash.com/photo-1564089957880-517edea1afc5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1500',
  image3Alt: 'image',
  heading1: 'Photo Gallery',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image1Alt: 'PlaceholderImage1302',
  image2Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1500',
  image7Alt: 'image',
  image5Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMjc0NTExMHww&ixlib=rb-4.0.3&w=1500',
  image6Src:
    'https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1500',
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image2Alt: 'image6',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image6Alt: 'image',
  image4Alt: 'image',
  image5Alt: 'image5',
}

Gallery71.propTypes = {
  image4Src: PropTypes.string,
  image7Src: PropTypes.string,
  image3Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
}

export default Gallery71
