import React from 'react'
import * as styles from './hero.module.css'
import cn from 'classnames'
import HeroContentLeft from './content/hero-content-left'
import HeroContentRight from './content/hero-content-right'
import hero from '../../../../images/illustrations/hero.svg'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import Button from '../../freestanding/button/button'
import { ArrowRight } from 'phosphor-react'

const Hero = () => (
  <div className={cn(styles.hero)}>
    <div className="container-fluid--next">
      <div className={cn(styles.content)}>
        <HeroContentLeft
          className={cn('col-lg-5--next col-md-6--next col-sm-12--next')}
        >
          <>
            <Molecule>
              <p className="font-h1">
                Security infrastructure for global internet services.
              </p>
              <p className="font-p-lg">
                Thousands of businesses with billions of network requests trust
                Ory's security infrastructure to authenticate and manage users,
                set and check permissions and to protect APIs, applications and
                data.
              </p>
            </Molecule>
            {/*<MoleculeInteraction>
              <Button
                className={cn('col-lg-6--next col-md-5--next col-sm-12--next')}
                href={'/products'}
                style={'filled'}
              >
                Get Started for free
              </Button>
              <Button
                className={cn('col-lg-6--next col-md-12--next col-sm-12--next')}
                href={'/open-source'}
                style={'text'}
              >
                Contact Sales <ArrowRight />
              </Button>
            </MoleculeInteraction>*/}
          </>
        </HeroContentLeft>
        <HeroContentRight
          className={cn('col-lg-6--next col-md-8--next col-sm-12--next')}
        >
          <img loading="lazy" src={hero} alt="placeholder" />
        </HeroContentRight>
      </div>
    </div>
  </div>
)

export default Hero
