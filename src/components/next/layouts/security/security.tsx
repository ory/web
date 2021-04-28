import React from 'react'
import * as styles from './security.module.css'
import cn from 'classnames'
import SecurityInner from './content/security-inner'
import SecurityFeatures from './content/security-features'

const features = [
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure"
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure"
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure"
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure"
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure"
  },
  {
    title: 'Feature',
    description:
      "Thousands of businesses with billions of network requests trust Ory' security infrastructure"
  }
]
const Security = () => (
  <div className={cn(styles.security, styles.securityContainer)}>
    <div className="container-fluid--next">
      <div className={cn(styles.securityContent)}>
        <SecurityInner>
          {features.map((feature) => {
            return (
              <SecurityFeatures>
                <p className="font-h5">{feature.title}</p>
                <p className="font-p">{feature.description}</p>
              </SecurityFeatures>
            )
          })}
        </SecurityInner>
      </div>
    </div>
  </div>
)

export default Security
