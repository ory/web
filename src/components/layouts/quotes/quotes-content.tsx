import React from 'react'
import ColourWrapper from '../../freestanding/colour/colour-wrapper'
import sainsburys from '../../../images/adopters/sainsburys.svg'
import thoughtworks from '../../../images/adopters/thoughtworks.svg'
import blues from '../../../images/adopters/blues.svg'

export const quotesDefault = {
  title: <>What our customers say</>,
  quotes: [
    {
      logo: (
        <ColourWrapper text={'kratos-primary'}>
          <img
            width={'100%'}
            height={'100%'}
            src={sainsburys}
            loading="lazy"
            alt={"Sainsbury's Logo"}
          />
        </ColourWrapper>
      ),
      description: (
        <>
          We like using Ory because it’s API first design made it super easy to
          integrate with the rest our stack.
        </>
      ),
      person: `Paul Harman`,
      jobTitle: `Engineering Manager, Sainsbury’s Tech`
    },
    {
      logo: (
        <img
          width={'100%'}
          height={'100%'}
          src={thoughtworks}
          loading="lazy"
          alt={'Thoughtworks Logo'}
        />
      ),
      description: (
        <>
          With Ory, I can build custom and secure ID infrastructure and APIs
          that fit perfectly into my client's ever-evolving cloud environments.
        </>
      ),
      person: `Ken Adler`,
      jobTitle: `Identity & Infosec, Thoughtworks`
    },
    {
      logo: (
        <img
          width={'100%'}
          height={'100%'}
          src={blues}
          loading="lazy"
          alt={'Blues Logo'}
        />
      ),
      description: (
        <>
          I needed an Auth System that would work with modern setups. Ory fit
          the bill perfectly and just works.
        </>
      ),
      person: `Steff Kelsey`,
      jobTitle: `VP of Engineering. Blues Inc.`
    }
  ]
}
