import React from 'react'

import PropTypes from 'prop-types'

import './excludes.css'

const Excludes = (props) => {
  return (
    <div className={`excludes-mark ${props.rootClassName} `}>
      <div className="excludes-icon">
        <svg viewBox="0 0 1024 1024" className="excludes-icon1">
          <path
            d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
            className=""
          ></path>
        </svg>
      </div>
      <label className="excludes-label">{props.Label}</label>
    </div>
  )
}

Excludes.defaultProps = {
  Label: 'Sed ut pespiciatis unde omnis',
  rootClassName: '',
}

Excludes.propTypes = {
  Label: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Excludes
