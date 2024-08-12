import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing141.css'

const Pricing141 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing141-pricing23 thq-section-padding">
      <div className="pricing141-max-width thq-section-max-width">
        <div className="pricing141-section-title">
          <span className="pricing141-text10 thq-body-small">
            {props.content1}
          </span>
          <div className="pricing141-content">
            <h2 className="pricing141-text11 thq-heading-2">
              {props.heading1}
            </h2>
            <p className="pricing141-text12 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing141-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing141-button10 thq-button-filled thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing141-button11 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing141-button12 thq-button-filled thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing141-button13 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing141-container1">
            <div className="pricing141-column1 thq-card">
              <div className="pricing141-price10">
                <div className="pricing141-price11">
                  <p className="pricing141-text17 thq-body-large">
                    {props.plan1}
                  </p>
                  <h3 className="pricing141-text18 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing141-list1">
                  <div className="pricing141-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing141-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing141-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button14 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing141-column2 thq-card">
              <div className="pricing141-price12">
                <div className="pricing141-price13">
                  <p className="pricing141-text24 thq-body-large">
                    {props.plan2}
                  </p>
                  <h3 className="pricing141-text25 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing141-list2">
                  <div className="pricing141-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing141-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing141-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing141-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button15 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing141-column3 thq-card">
              <div className="pricing141-price14">
                <div className="pricing141-price15">
                  <p className="pricing141-text32 thq-body-large">
                    {props.plan3}
                  </p>
                  <h3 className="pricing141-text33 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly}</p>
                </div>
                <div className="pricing141-list3">
                  <div className="pricing141-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing141-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing141-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing141-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing141-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button16 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing141-container2">
            <div className="pricing141-column4 thq-card">
              <div className="pricing141-price16">
                <div className="pricing141-price17">
                  <span className="pricing141-text41 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing141-text42 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing141-list4">
                  <div className="pricing141-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing141-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing141-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button17 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing141-column5 thq-card">
              <div className="pricing141-price18">
                <div className="pricing141-price19">
                  <span className="pricing141-text48 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing141-text49 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing141-list5">
                  <div className="pricing141-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing141-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing141-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing141-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button18 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing141-column6 thq-card">
              <div className="pricing141-price20">
                <div className="pricing141-price21">
                  <span className="pricing141-text56 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing141-text57 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing141-list6">
                  <div className="pricing141-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing141-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing141-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing141-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing141-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing141-button19 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing141.defaultProps = {
  plan2Feature4: 'Feature text goes here',
  plan1Feature2: 'Neuroscience research showcase',
  plan1Price1: '$200/yr',
  plan3Yearly: '$2000',
  plan3: 'Enterprise plan',
  plan2Feature31: 'Feature text goes here',
  plan2Price: '$100',
  plan1Yearly1: 'or $20 monthly',
  plan2Action1: 'Get started',
  plan1: 'Basic plan',
  plan1Feature3: 'Access to Science & Philosophy Podcast episodes',
  content1: 'Choose the perfect plan for you',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan21: 'Business plan',
  heading1: 'Pricing plan',
  plan2Action: 'Sign up',
  plan2Feature2: 'Opportunities for freelance work',
  plan3Feature21: 'Feature text goes here',
  plan1Feature1: 'Interactive CV',
  plan3Feature2: 'Personalized consultation sessions',
  plan3Feature1: 'All features of Plan 2',
  plan3Feature11: 'Feature text goes here',
  plan3Price: '$200',
  plan3Feature31: 'Feature text goes here',
  plan3Action1: 'Get started',
  plan1Action1: 'Get started',
  plan1Yearly: '$500',
  plan2Price1: '$299/yr',
  plan1Price: '$50',
  plan3Feature4: 'Feature text goes here',
  plan3Feature51: 'Feature text goes here',
  plan3Price1: '$499/yr',
  plan1Feature31: 'Feature text goes here',
  plan1Action: 'Sign up',
  plan31: 'Enterprise plan',
  plan2Feature11: 'Feature text goes here',
  plan3Feature41: 'Feature text goes here',
  plan3Action: 'Sign up',
  plan3Feature3: 'Exclusive content access',
  plan2: 'Business plan',
  plan3Feature5: 'Feature text goes here',
  plan11: 'Basic plan',
  plan1Feature11: 'Feature text goes here',
  plan2Feature3: 'Priority support',
  plan2Feature21: 'Feature text goes here',
  plan2Yearly: '$1000',
  plan2Feature41: 'Feature text goes here',
  plan1Feature21: 'Feature text goes here',
  plan2Feature1: 'All features of Plan 1',
  plan3Yearly1: 'or $49 monthly',
  plan2Yearly1: 'or $29 monthly',
}

Pricing141.propTypes = {
  plan2Feature4: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan3: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan2Price: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan1: PropTypes.string,
  plan1Feature3: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  plan21: PropTypes.string,
  heading1: PropTypes.string,
  plan2Action: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan3Price: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan1Price: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan1Action: PropTypes.string,
  plan31: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan3Action: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan2: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan11: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan2Yearly1: PropTypes.string,
}

export default Pricing141
