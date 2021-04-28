import React from 'react'
import * as styles from './coding.module.css'
import cn from 'classnames'

const Coding = () => (
  <div className={cn(styles.coding)}>
    <div className="container-fluid--next">
      <div className={cn(styles.container)}>
        <div className={cn(styles.content)}></div>
      </div>
    </div>
  </div>
)

export default Coding
