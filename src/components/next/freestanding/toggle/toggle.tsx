import React, { useEffect, useState } from 'react'
import * as styles from './toggle.module.css'
import cn from 'classnames'
import Container from '../containers/container'
import { pl16, pr16 } from '../utils/padding.module.css'

export interface ToggleText {
  textEnable: string
  textDisable: string
}

interface PropTypes {
  className?: string
  enabled?: boolean
  text?: ToggleText
  onClick: () => void
}

const Toggle = ({ className, enabled = false, text, onClick }: PropTypes) => {
  const getToggle = (enabled: boolean) => {
    return enabled ? styles.toggleEnabled : styles.toggleDisabled
  }

  const getTextToggle = (enabled: boolean) => {
    return enabled ? styles.toggleTextEnabled : styles.toggleTextDisabled
  }

  return (
    <Container className={cn(className && className)}>
      {text && (
        <p className={cn(getTextToggle(!enabled), pr16, 'font-btn')}>
          {text.textEnable}
        </p>
      )}
      <div className={cn(styles.toggle, getToggle(enabled))} onClick={onClick}>
        <div className={cn(styles.toggleRectangle)} />
      </div>
      {text && (
        <p className={cn(getTextToggle(enabled), pl16, 'font-btn')}>
          {text.textDisable}
        </p>
      )}
    </Container>
  )
}

export default Toggle
