import React, { ReactNode } from 'react'
import cn from 'classnames'
import * as styles from './responsive-section.module.css'

interface PropTypes {
  dark?: boolean
  mobile?: ReactNode[]
  left: ReactNode
  right: ReactNode
  wide?: boolean
  leftWide?: boolean
  title: ReactNode
}

const ResponsiveSection = ({
  dark = false,
  title,
  left,
  right,
  leftWide,
  wide,
  mobile = []
}: PropTypes) => (
  <div
    className={cn(styles.section, {
      [styles.dark]: dark,
      [styles.light]: !dark,
      ['is-dark-background']: dark,
      ['is-light-background']: !dark
    })}
  >
    <div className="container-fluid">
      <div
        className={cn('row middle-sm', {
          'hidden-sm': mobile.length > 0,
          'hidden-md': mobile.length > 0
        })}
      >
        <div
          className={cn(
            'col-lg-offset-1  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10',
            {
              'col-lg-5': leftWide,
              'col-lg-4': !leftWide
            }
          )}
        >
          <h3 className="hidden-sm hidden-md">{title}</h3>
          {left}
        </div>
        <div
          className={cn(
            'col-lg-offset-2 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10',
            {
              'col-lg-4': !wide,
              'col-lg-5': wide,
              'col-lg-offset-2': !leftWide,
              'col-lg-offset-1': leftWide
            }
          )}
        >
          {right}
        </div>
        <div className="hidden-lg col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  </div>
)

export default ResponsiveSection
