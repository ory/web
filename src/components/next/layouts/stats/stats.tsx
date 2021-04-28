import React from 'react'
import * as styles from './stats.module.css'
import cn from 'classnames'
import Molecule from '../../freestanding/molecule/molecule'
import StatsContent from './content/stats-content'

const Stats = () => (
  <div className={cn(styles.stats, styles.statsContainer)}>
    <StatsContent></StatsContent>
  </div>
)

export default Stats
