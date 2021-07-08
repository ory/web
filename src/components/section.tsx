import cn from 'classnames'
import React, { ReactNode } from 'react'

import * as styles from './section.module.css'

interface PropTypes {
  dark?: boolean
  mobile?: ReactNode[]
  left: ReactNode
  right: ReactNode
  wide?: boolean
  leftWide?: boolean
}

const Section = ({
  dark = false,
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
      </div>
      {mobile.length > 0 && (
        <div className="row middle-sm hidden-lg">
          {mobile.map((node, index) => (
            <div
              key={index}
              className={
                'col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10'
              }
            >
              {node}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)

export default Section
