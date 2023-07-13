import React from 'react'

import PropTypes from 'prop-types'

import './includes.css'

const Includes = (props) => {
  return (
    <div className={`includes-mark ${props.rootClassName} `}>
      <div className="includes-icon">
        <svg viewBox="0 0 1024 1024" className="includes-icon1">
          <path
            d="M384 690l452-452 60 60-512 512-238-238 60-60z"
            className=""
          ></path>
        </svg>
      </div>
      <label className="includes-label">{props.Label}</label>
    </div>
  )
}

Includes.defaultProps = {
  rootClassName: '',
  Label: 'Sed ut pespiciatis unde omnis',
}

Includes.propTypes = {
  rootClassName: PropTypes.string,
  Label: PropTypes.string,
}

export default Includes
