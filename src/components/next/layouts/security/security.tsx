import React from 'react'
import * as styles from './security.module.css'
import cn from 'classnames'

const Security = () => (
  <div className={cn(styles.security, styles.securityContainer)}>
    <div className="container-fluid--next">
      <div className={cn(styles.securityContent)}></div>
    </div>
  </div>
)

export default Security
