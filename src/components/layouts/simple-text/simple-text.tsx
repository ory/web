import cn from 'classnames'
import React, { ReactElement } from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import { pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './simple-text.module.css'

interface PropTypes {
  title: string
  small?: boolean
  text: React.ReactElement
  className?: string
}

const SimpleText = ({ title, small, text, className }: PropTypes) => (
  <div className={cn(styles.simpleText, `${className}`)}>
    <Container fluid={true} alignItems={'start'} justify={'center'}>
      <Grid lg={8} md={10} sm={12} xs={12}>
        <Container alignItems={'start'}>
          <Grid lg={4} md={4} sm={12} xs={12}>
            {!small ? (
              <h1 className={cn('font-h1', pb32)}>{title}</h1>
            ) : (
              <h3 className={cn('font-h3', pb32)}>{title}</h3>
            )}
          </Grid>
          <Grid lg={8} md={8} sm={12} xs={12}>
            <p className={cn('font-p-lg', 'mute-85')}>{text}</p>
          </Grid>
        </Container>
      </Grid>
    </Container>
  </div>
)

export default SimpleText
