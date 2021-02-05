import React from 'react'
import styles from './features.module.css'

import cn from 'classnames'

interface PropTypes {
  headline: Headline[]
  features: Feature[]
}

interface Feature {
  icon: string
  title: string
  content: string
}

interface Headline {
  overline: string
  title: string
}

const Features = ({ headline, features }: PropTypes) => (
  <div className={cn(styles.features)}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-offset-1 col-lg-10  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
          {headline.map(({ title, overline }) => (
            <div>
              <p className={cn(styles.overline)}>{overline}</p>
              <h2>{title}</h2>
            </div>
          ))}
          <div>
            <div className={cn(styles.featuresFlex)}>
              {features.map(({ title, content }) => (
                <div className={cn(styles.featuresBox)}>
                  {/*<img
                      loading="lazy"
                      className={cn(styles.icon)}
                      src={src}
                      alt={title}
                    /> comment out for now, add later*/}

                  <h3>{title}</h3>
                  <p className="secondary">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Features
