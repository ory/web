import React, { ReactNode } from 'react'
import cn from 'classnames'
import * as styles from './compressed-section.module.css'

interface PropTypes {
  expanded?: boolean
  mobile?: ReactNode[]
  left: ReactNode
  right: ReactNode
}

const CompressedSection = ({
  expanded = false,
  left,
  right,
  mobile = []
}: PropTypes) => (
  <div
    className={cn(styles.compressed, {
      [styles.expanded]: expanded
    })}
  >
    <div className="container-fluid">
      <div
        className={cn('row middle-sm', {
          'hidden-sm': mobile.length > 0,
          'hidden-md': mobile.length > 0
        })}
      >
        <div className="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          {left}
        </div>
        <div className="col-lg-offset-2 col-lg-5 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
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

export default CompressedSection
