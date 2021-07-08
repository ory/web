import React from 'react'

import * as styles from './vertical-divider.module.css'

const VerticalDivider = ({ padding }: { padding: number }) => (
  <div className={styles.divider} style={{ top: padding, bottom: padding }} />
)

export default VerticalDivider
