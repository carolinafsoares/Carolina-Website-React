import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing14.css'

const Pricing14 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing14-pricing23 thq-section-padding">
      <div className="pricing14-max-width thq-section-max-width">
        <div className="pricing14-section-title">
          <span className="pricing14-text10 thq-body-small">
            {props.content1}
          </span>
          <div className="pricing14-content">
            <h2 className="pricing14-text11 thq-heading-2">{props.heading1}</h2>
            <p className="pricing14-text12 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="pricing14-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing14-button10 thq-button-filled thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing14-button11 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing14-button12 thq-button-filled thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing14-button13 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing14-container1">
            <div className="pricing14-column1 thq-card">
              <div className="pricing14-price10">
                <div className="pricing14-price11">
                  <p className="pricing14-text17 thq-body-large">
                    {props.plan1}
                  </p>
                  <h3 className="pricing14-text18 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing14-list1">
                  <div className="pricing14-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button14 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing14-column2 thq-card">
              <div className="pricing14-price12">
                <div className="pricing14-price13">
                  <p className="pricing14-text24 thq-body-large">
                    {props.plan2}
                  </p>
                  <h3 className="pricing14-text25 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan2Yearly}</p>
                </div>
                <div className="pricing14-list2">
                  <div className="pricing14-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3}
                    </span>
                  </div>
                  <div className="pricing14-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button15 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing14-column3 thq-card">
              <div className="pricing14-price14">
                <div className="pricing14-price15">
                  <p className="pricing14-text32 thq-body-large">
                    {props.plan3}
                  </p>
                  <h3 className="pricing14-text33 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan3Yearly}</p>
                </div>
                <div className="pricing14-list3">
                  <div className="pricing14-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing14-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                  <div className="pricing14-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3}
                    </span>
                  </div>
                  <div className="pricing14-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4}
                    </span>
                  </div>
                  <div className="pricing14-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button16 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing14-container2">
            <div className="pricing14-column4 thq-card">
              <div className="pricing14-price16">
                <div className="pricing14-price17">
                  <span className="pricing14-text41 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing14-text42 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing14-list4">
                  <div className="pricing14-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button17 thq-button-outline thq-button-animated">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing14-column5 thq-card">
              <div className="pricing14-price18">
                <div className="pricing14-price19">
                  <span className="pricing14-text48 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing14-text49 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing14-list5">
                  <div className="pricing14-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing14-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button18 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing14-column6 thq-card">
              <div className="pricing14-price20">
                <div className="pricing14-price21">
                  <span className="pricing14-text56 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing14-text57 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing14-list6">
                  <div className="pricing14-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing14-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing14-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing14-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing14-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing14-button19 thq-button-filled thq-button-animated">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing14.defaultProps = {
  plan1Yearly: '$500',
  plan1Action: 'Purchase Now',
  plan3Feature51: 'Feature text goes here',
  plan21: 'Business plan',
  plan3Feature5: 'Feature text goes here',
  plan3Feature41: 'Feature text goes here',
  plan3Yearly1: 'or $49 monthly',
  plan3Feature2: 'Personalized podcast episode on a topic of your choice',
  plan2Feature41: 'Feature text goes here',
  plan2Feature31: 'Feature text goes here',
  plan2Price: '$100',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  plan3Action: 'Purchase Now',
  plan1Price1: '$200/yr',
  plan1Action1: 'Get started',
  plan2Action: 'Purchase Now',
  plan3Feature11: 'Feature text goes here',
  plan2Action1: 'Get started',
  plan2Yearly: '$1000',
  plan3Action1: 'Get started',
  plan3Feature3: 'Priority booking for consultation services',
  plan2Feature4: 'Feature text goes here',
  plan1Yearly1: 'or $20 monthly',
  plan2Yearly1: 'or $29 monthly',
  plan2Feature21: 'Feature text goes here',
  plan1Feature31: 'Feature text goes here',
  plan31: 'Enterprise plan',
  heading1: 'Pricing plan',
  plan2Feature11: 'Feature text goes here',
  plan2Feature3: 'Early access to podcast episodes',
  plan2Feature2: 'One-on-one Q&A session with the host',
  plan3: 'Enterprise plan',
  plan3Feature1: 'All features from Plan 2',
  plan1Feature3: 'Discount on consultation services',
  plan1: 'Basic plan',
  plan3Feature31: 'Feature text goes here',
  plan3Feature4: 'Feature text goes here',
  plan1Feature2: 'Monthly newsletter subscription',
  content1: 'Choose the perfect plan for you',
  plan2: 'Business plan',
  plan3Feature21: 'Feature text goes here',
  plan3Price: '$200',
  plan2Feature1: 'All features from Plan 1',
  plan11: 'Basic plan',
  plan1Feature21: 'Feature text goes here',
  plan3Yearly: '$2000',
  plan1Feature1: 'Access to exclusive podcast episodes',
  plan3Price1: '$499/yr',
  plan2Price1: '$299/yr',
  plan1Feature11: 'Feature text goes here',
  plan1Price: '$50',
}

Pricing14.propTypes = {
  plan1Yearly: PropTypes.string,
  plan1Action: PropTypes.string,
  plan3Feature51: PropTypes.string,
  plan21: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan2Feature41: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan2Price: PropTypes.string,
  content2: PropTypes.string,
  plan3Action: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan2Action: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan31: PropTypes.string,
  heading1: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan2Feature3: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan3: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan1: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan1Feature2: PropTypes.string,
  content1: PropTypes.string,
  plan2: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan3Price: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan11: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan2Price1: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan1Price: PropTypes.string,
}

export default Pricing14
