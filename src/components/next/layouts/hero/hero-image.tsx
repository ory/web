import React from 'react'
import * as styles from './hero-image.module.css'
import cn from 'classnames'
import CodeBox from '../../freestanding/codebox/codebox'
import StyledImage from '../../freestanding/styledImage/styled-image'

export interface PropTypes {
  children?: React.ReactNode
}

const HeroImage = ({ children }: PropTypes) => (
  <div className={cn(styles.heroImage)}>
    <div className={cn(styles.heroImageBack)}>
      <StyledImage></StyledImage>
    </div>
    <div className={cn(styles.heroImageFront)}>
      <CodeBox
        code={`$ ory auth
$ ory proxy \\
--project sharp-jemison-0r5memq5rg \\
--port 4000
          `}
      />
    </div>
    {children}
  </div>
)

export default HeroImage
