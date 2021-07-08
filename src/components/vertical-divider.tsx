import * as styles from './vertical-divider.module.css'
import React from 'react'

const VerticalDivider = ({ padding }: { padding: number }) => (
  <div className={styles.divider} style={{ top: padding, bottom: padding }} />
)

export default VerticalDivider
