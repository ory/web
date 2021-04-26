import React from 'react'
import * as styles from './hero.module.css'
import * as defaults from '../../../../styles/themes/default.css'

import cn from 'classnames'
import Button from '../../freestanding/button/button'
import HeroImage from './hero-image'
import { ArrowRight } from 'phosphor-react'

const Hero = () => (
  <div className={cn(styles.hero)}>
    <div className={cn(styles.heroMain)}>
      <div className={cn(styles.heroInnerLeft)}>
        <div className={cn(styles.heroInnerLeftInfo)}>
          <div className={cn(styles.heroTitle)}>
            Security infrastructure for global internet services.
          </div>
          <div className={cn(styles.heroSubtitle)}>
            Thousands of businesses with billions of network requests trust
            Ory's security infrastructure to authenticate and manage users, set
            and check permissions and to protect APIs, applications and data.
          </div>
        </div>
        <Button
          className={styles.heroButtonGetStarted}
          size="medium"
          style="filled"
          href="/products"
        >
          Get started for free
        </Button>
        <div className={cn(styles.heroInnerLeftBtnGroup)}>
          
          <Button
            className={styles.heroButtonOpenSource}
            size={'medium'}
            style={'text'}
            href={'/products'}
          >
            <div className={styles.text}>Open Source</div>
            <ArrowRight className={styles.icon} />
          </Button>
        </div>
      </div>
      <div className={cn(styles.heroInnerRight)}>
        <HeroImage></HeroImage>
      </div>
    </div>
  </div>
)

export default Hero
