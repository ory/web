import React from 'react'
import * as styles from './molecule-notification.module.css'
import cn from 'classnames'

interface PropTypes {
  className?: string
  children?: React.ReactNode
  icon: string
  text: string
  linkHref: string
  linkTitle: string
  variant: 'news' | 'success' | 'warning' | 'error' | 'info'
}
const MoleculeNotification = ({
  className,
  children,
  icon,
  text,
  linkHref,
  linkTitle,
  variant
}: PropTypes) => (
  <div
    className={cn(
      styles.moleculeNotification,
      styles.moleculeNotificationText,
      `box-${variant}`,
      className && className
    )}
  >
    <span className={cn(`icon-${variant}`)}>{icon}</span>
    <p className={cn('font-p-sm', `text-${variant}`)}>{text}</p>
    <a href={linkHref} className={cn(`link-${variant}`)}>
      {linkTitle}
    </a>
  </div>
)

export default MoleculeNotification
