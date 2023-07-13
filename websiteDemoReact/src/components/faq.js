import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className={`faq-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="faq-element accordion-element"
      >
        <div className="faq-details">
          <span className="faq-text">
            What is sit amet, consectetur adipiscing elit, sed do?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span data-role="accordion-content" className="faq-text01">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element1 accordion-element"
      >
        <div className="faq-details1">
          <span className="faq-text02">
            We&apos;ll update amet, consectetur adipiscing elit until
            you&apos;re 100% happy.
          </span>
          <span data-role="accordion-content" className="faq-text03">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon02">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element2 accordion-element"
      >
        <div className="faq-details2">
          <span className="faq-text04">
            Is it really sit amet, consectetur adipiscing elit, sed do?
          </span>
          <span data-role="accordion-content" className="faq-text05">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon04">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element3 accordion-element"
      >
        <div className="faq-details3">
          <span className="faq-text06">
            We work, what is sit amet, consectetur adipiscing elit, sed do sint
            occaecat cupidatat non proident
          </span>
          <span data-role="accordion-content" className="faq-text07">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon06">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element4 accordion-element"
      >
        <div className="faq-details4">
          <span className="faq-text08">
            What is sit amet, consectetur adipiscing elit, sed do?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span data-role="accordion-content" className="faq-text09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon08">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element5 accordion-element"
      >
        <div className="faq-details5">
          <span className="faq-text10">
            Amet, consectetur adipiscing elit mollit anim id est laborum.
          </span>
          <span data-role="accordion-content" className="faq-text11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon10">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ
