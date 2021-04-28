import React from 'react'
import * as styles from './coding.module.css'
import cn from 'classnames'

const Coding = () => (
  <div className={cn(styles.coding, styles.codingContainer)}>
    <div className="container-fluid--next">
      <div className={cn(styles.content)}>
        <p>Some content</p>
      </div>
    </div>
  </div>
)

export default Coding
