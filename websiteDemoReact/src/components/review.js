import React from 'react'

import PropTypes from 'prop-types'

import './review.css'

const Review = (props) => {
  return (
    <section className={`review-card ${props.rootClassName} `}>
      <div className="review-stars">
        <svg viewBox="0 0 1024 1024" className="review-icon">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon02">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon04">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon06">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon08">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
      </div>
      <main className="review-content">
        <p className="review-quote">{props.Quote}</p>
        <div className="review-author">
          <img
            alt={props.AvatarAlt}
            src={props.AvatarSrc}
            className="review-avatar"
          />
          <div className="review-details">
            <h1 className="review-author1">{props.Author}</h1>
            <label className="review-position">{props.Position}</label>
          </div>
        </div>
      </main>
    </section>
  )
}

Review.defaultProps = {
  Quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
  Author: 'Sima Mosbacher',
  rootClassName: '',
  AvatarSrc:
    'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3NzU5NDE3&ixlib=rb-4.0.3&w=200',
  Position: 'Manager',
  AvatarAlt: 'image',
}

Review.propTypes = {
  Quote: PropTypes.string,
  Author: PropTypes.string,
  rootClassName: PropTypes.string,
  AvatarSrc: PropTypes.string,
  Position: PropTypes.string,
  AvatarAlt: PropTypes.string,
}

export default Review
