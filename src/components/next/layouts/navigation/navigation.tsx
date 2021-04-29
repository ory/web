import React from 'react'
import * as styles from './navigation.module.css'
import cn from 'classnames'

const mainLinks = [
  {
    title: 'Product'
  },
  {
    title: 'Developers'
  },
  {
    title: 'Pricing'
  },
  {
    title: 'Company'
  }
]

const Navigation = () => (
  <div className={cn(styles.navigation, styles.navigationContainer)}>
    <div
      className={cn(
        styles.content,
        styles.contentContainer,
        styles.contentContainerInner
      )}
    ></div>
  </div>
)

export default Navigation
