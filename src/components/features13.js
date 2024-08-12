import React from 'react'

import PropTypes from 'prop-types'

import './features13.css'

const Features13 = (props) => {
  return (
    <div className="features13-layout251 thq-section-padding">
      <div className="features13-max-width thq-section-max-width">
        <div className="thq-flex-row features13-section-title">
          <div className="features13-column thq-flex-column">
            <h2 className="thq-heading-2 features13-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features13-content1">
          <div className="features13-row thq-flex-row">
            <div className="features13-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features13-feature1-image"
              />
              <div className="features13-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features13-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features13-feature2-image"
              />
              <div className="features13-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features13-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features13-feature3-image"
              />
              <div className="features13-content4 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features13-actions">
          <button className="thq-button-filled features13-button1">
            <a
              href="https://podcasters.spotify.com/pod/show/neuroverse9"
              target="_blank"
              rel="noreferrer noopener"
              className="features13-action1 thq-body-small"
            >
              {props.mainAction}
            </a>
          </button>
          <button className="thq-button-outline features13-button2">
            <a
              href="https://www.neuroversepod.com"
              target="_blank"
              rel="noreferrer noopener"
              className="features13-action2 thq-body-small"
            >
              {props.secondaryAction}
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

Features13.defaultProps = {
  feature2Title: 'Outreach & Engagement',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature1Description:
    'I believe podcasts benefit and engage a heterogenous audience as it allows for the dissemination of scientific knowledge and creative discussions beyond the classroom and across borders, being easily accessible to everyone everywhere.  Neuroverse brings the private public and allows lecture-hall type discussions to be made available to all those with internet access would encourage a global community of scientific thinking to be born. We aim to: 1. Engage a diverse audience, especially across scientists and non-scientists and different age groups. 2.  Encourage a multidisciplinary collaborations and discussions across researchers. 3. Foster a community of discussion about science ‘outside of the classroom’',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  secondaryAction: 'Podcast website',
  mainAction: 'Podcast',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  feature2Description:
    'A major consideration put in place is to have a wide range of speakers from different socioeconomic backgrounds and gender. This promotes representation of scientific figures for those who are underrepresented in science. I also make the podcast inclusive by interviewing guests who are at all stages of their career from undergraduates to PI. This helps to engage those who are currently undergoing studies by relating to voices similar to theirs, as well as listening to the episodes that benefit from the expertise of PI’s. I have also attended several public speaking events on science outreach and engagement, the last one hosted by the British Neuroscience Association.',
  feature1ImageAlt: 'PlaceholderImage1314',
  feature1Title: 'Podcast',
  feature2ImageAlt: 'PlaceholderImage1314',
  feature3Title: 'Art & Interdisciplinery',
  sectionTitle: 'Neuroverse',
  feature3Description:
    'Since a major aim of Neuroverse is to foster cross-disciplinarity, we collaborate with artists such as “Take” and have launched science-art  competitions, where we will encourage listeners to submit a piece of art inspired by conversations from the podcast. In this way, I hope to promote the intersection between science and art as a medium to express ideas. I have feature the winning art piece on the Neuroverse website and on merchandise that has been released.  I believe it is vital to interview people from different fields to ensure echo chambers of scientific information don’t occur.',
  sectionDescription:
    "Since it's launch in February 2022, Neuroverse has had over 10,000 streams from 60+ countries around the world",
}

Features13.propTypes = {
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
  mainAction: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3Description: PropTypes.string,
  sectionDescription: PropTypes.string,
}

export default Features13
