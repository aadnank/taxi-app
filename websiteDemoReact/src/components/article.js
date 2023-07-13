import React from 'react'

import PropTypes from 'prop-types'

import './article.css'

const Article = (props) => {
  return (
    <section className={`article-card ${props.rootClassName} `}>
      <main className="article-content">
        <header className="article-header">
          <h1 className="article-header1">{props.Header}</h1>
        </header>
        <p className="article-description">{props.Description}</p>
        <div className="article-button">
          <a
            href={props.ButtonLink}
            target="_blank"
            rel="noreferrer noopener"
            className="article-link"
          >
            <p className="article-text">{props.Button}</p>
          </a>
        </div>
      </main>
    </section>
  )
}

Article.defaultProps = {
  rootClassName: '',
  Button: 'Read ->',
  ButtonLink: '',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  Header: 'TechCrunch',
}

Article.propTypes = {
  rootClassName: PropTypes.string,
  Button: PropTypes.string,
  ButtonLink: PropTypes.string,
  Description: PropTypes.string,
  Header: PropTypes.string,
}

export default Article
