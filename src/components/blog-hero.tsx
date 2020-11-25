import React from 'react'
import * as styles from './blog-hero.module.css'
import cn from 'classnames'

interface PropTypes {
  title: string
  date?: string
  author: string
  overline?: string
  subtitle?: string
}

interface Profile {
  fullname: string
  github: string
}

const authors: { [key: string]: Profile } = {
  aeneasr: {
    fullname: 'Aeneas Rekkas',
    github: 'http://github.com/aeneasr'
  },
  zepatrik: {
    fullname: 'Patrik Neu',
    github: 'https://github.com/zepatrik'
  }
}

const Author = ({ author }: { author: string }) => {
  const profile = authors[author]
  if (!profile) {
    return <span>{author}</span>
  }

  return <a href={profile.github}>{profile.fullname}</a>
}

const BlogHero = ({ title, date, author, overline, subtitle }: PropTypes) => (
  <>
    <div className={styles.title}>
      <div className="container-fluid">
        <div className="row">
          <div
            className={cn(
              'col-sm-10 col-sm-offset-1  col-md-8 col-md-offset-2  col-lg-8 col-lg-offset-2',
              styles.line
            )}
          >
            {overline && <p className={styles.subtitle}>{overline}</p>}
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <p className={styles.info}>
              <span className={styles.author}>
                <Author author={author} />
                <br />
                {date}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default BlogHero
