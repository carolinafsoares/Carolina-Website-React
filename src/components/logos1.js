import React from 'react'

import PropTypes from 'prop-types'

import './logos1.css'

const Logos1 = (props) => {
  return (
    <div className="logos1-container1 thq-section-padding">
      <div className="logos1-max-width thq-section-max-width">
        <h2 className="logos1-text thq-heading-2">{props.heading1}</h2>
        <div className="logos1-container2 thq-grid-6">
          <a
            href="https://www.ukri.org/councils/bbsrc/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              id="https://www.ukri.org/councils/bbsrc/"
              alt={props.logo1Alt}
              src={props.logo1Src}
              className="logos1-logo1 thq-img-ratio-16-9"
            />
          </a>
          <a
            href="https://www.lido-dtp.ac.uk"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.logo2Alt}
              src={props.logo2Src}
              className="logos1-logo2 thq-img-ratio-16-9"
            />
          </a>
          <a
            href="https://www.kcl.ac.uk"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.logo3Alt}
              src={props.logo3Src}
              className="logos1-logo3 thq-img-ratio-16-9"
            />
          </a>
          <a
            href="https://www.sainsburywellcome.org/web/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.logo4Alt}
              src={props.logo4Src}
              className="logos1-logo4 thq-img-ratio-16-9"
            />
          </a>
          <a
            href="https://www.devneuro.org/cndd/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.logo5Alt}
              src={props.logo5Src}
              className="logos1-logo5 thq-img-ratio-16-9"
            />
          </a>
          <a
            href="https://wellcome.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              id="wellcome"
              alt={props.logo6Alt}
              src={props.logo6Src}
              className="logos1-logo6 thq-img-ratio-16-9"
            />
          </a>
          <a
            href="https://devneuro.org/cdn/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="logos1-image1"
            />
          </a>
          <a
            href="https://www.biochemistry.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="logos1-image2"
            />
          </a>
          <a
            href="https://www.scientifica.uk.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="logos1-image3"
            />
          </a>
          <a
            href="https://taktarts.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="logos1-image4"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

Logos1.defaultProps = {
  logo1Alt: 'Neuroscience Research Institute',
  imageAlt: 'image',
  imageAlt1: 'image',
  logo4Src: '/images-1400w.png',
  logo3Alt: 'Freelance Work Opportunities',
  imageSrc: '/images-1400w.jpeg',
  imageSrc1: '/biochemsoc-logo-1400w.jpg',
  logo6Alt: 'Outreach Activities',
  imageAlt3: 'image',
  heading1: 'Funding Bodies & Collaborators',
  imageSrc2: '/logo-1400w.jpeg',
  logo2Alt: 'Science & Philosophy Podcast',
  logo2Src: '/colour_logo-1400w.jpg',
  logo1Src: '/ukri-bbsrc-square-logo-1400w.png',
  imageAlt2: 'image',
  logo3Src: '/kcl.svg-1400w.png',
  imageSrc3: '/screenshot%202024-06-28%20at%2011.50.12-1400w.png',
  logo4Alt: 'Consultation Services',
  logo5Alt: 'Entrepreneurship Projects',
  logo5Src: '/screenshot%202024-06-28%20at%2011.51.35-1400w.png',
  logo6Src: '/wellcome_trust_logo.svg-1400w.png',
}

Logos1.propTypes = {
  logo1Alt: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  logo4Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  logo6Alt: PropTypes.string,
  imageAlt3: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc2: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo1Src: PropTypes.string,
  imageAlt2: PropTypes.string,
  logo3Src: PropTypes.string,
  imageSrc3: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo6Src: PropTypes.string,
}

export default Logos1
