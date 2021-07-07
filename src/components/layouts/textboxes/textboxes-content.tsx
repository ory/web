import Button from '../../freestanding/button/button'
import IconWrapper from '../../freestanding/icon/icon-wrapper'
import React from 'react'

const ArrowRightThemed = (
  <IconWrapper color={'themed-primary'} icon={'ArrowRightBold'} size={'16'} />
)
const Code = (
  <IconWrapper color={'themed-primary'} icon={'CodeDuotone'} size={'32'} />
)
const LockOpen = (
  <IconWrapper color={'themed-primary'} icon={'LockOpenDuotone'} size={'32'} />
)
const UserPlus = (
  <IconWrapper color={'themed-primary'} icon={'UserPlusDuotone'} size={'32'} />
)
const CirclesThreePlus = (
  <IconWrapper
    color={'themed-primary'}
    icon={'CirclesThreePlusDuotone'}
    size={'32'}
  />
)

export const textboxesDefault = {
  overline: 'Modular Integration',
  title: <>Auth integration in 1.. 2.. done'</>,
  buttons: (
    <Button
      to={'https://console.ory.sh/registration'}
      style={'link'}
      iconRight={ArrowRightThemed}
    >
      Request Access
    </Button>
  ),

  feature: [
    {
      icon: Code,
      title: <>Ory is open source</>,
      description: (
        <>
          Ory's heart and soul are rooted in Open Source. Our commitment to open
          software will stay unchanged.
        </>
      )
    },
    {
      icon: UserPlus,
      title: <>No limits on identities</>,
      description: (
        <>
          Dont pay for Monthly Active Users. Pay for what you use.Choose a
          transparent plan that adapts to your needs.
        </>
      )
    },
    {
      icon: CirclesThreePlus,
      title: <>More features</>,
      description: (
        <>
          Ory draws from a large set of features: IAM, Permissions and Roles,
          Zero-Trust, OAuth2, OIDC, Integrations and more.
        </>
      )
    },
    {
      icon: LockOpen,
      title: <>No lock in</>,
      description: (
        <>
          We support the migration from Ory open source to Ory as a Service, and
          the other way around. Don't worry about lock in.
        </>
      )
    }
  ]
}


export const featuresJobsBenefits = {
  overline: 'Free Real Estate',
  title: <>Benefits of working at Ory</>,
  buttons: (
    <Button
      to={'https://console.ory.sh/registration'}
      style={'link'}
      iconRight={ArrowRightThemed}
    >
      Request Access
    </Button>
  ),

  feature: [
    {
      icon: Code,
      title: <>Open Source Company</>,
      description: (
        <>
          Help us create an open and free standard for authentication and
          authorization that is available to everyone. Much of the work we do is
          released to public domain or supports our open source offerings.
          Openness and sincerity are the heart and soul of Ory and we will keep
          it that way.
        </>
      )
    },
    {
      icon: UserPlus,
      title: <>Cutting Edge Technology</>,
      description: (
        <>
          At Ory we stay at the forefront of modern technology. We adopt
          scalable and robust technology, e.g. Golang, CockroachDB, Docker &
          k8s, or React because we feel that we should work with the best
          technology available and support those that build it - Ory is using
          open source for almost everything. Work with technology you love and
          keep your skills as sharp & cutting edge as our tech stack.
        </>
      )
    },
    {
      icon: CirclesThreePlus,
      title: <>Create Value For Everyone</>,
      description: (
        <>
          Everyone working at Ory has a passion for the work we do. Being a
          small startup we foster a culture of flat hierarchy, which means
          everyone has a voice and we seek input from the whole company on
          important decisions. You will also get insight and influence other
          areas of operation regardless of your position (dev, product,
          customers, marketing, community, etc.) Unlike at $BIGCORP, people care
          about what they are building. Don’t waste your life - build something
          that has real value.
        </>
      )
    },
    {
      icon: LockOpen,
      title: <>Startup Culture</>,
      description: (
        <>
          You will be working in a fast-moving startup, breaking up a market
          that has been plagued by corporate mold for far too long. Experience
          the growth, working with an active open source community & a large
          variety of customers, and building completely new things. You won’t
          just be another employee - You have a direct impact on Ory’s success
          and the team will support you, but also depend on you - together we
          succeed.
        </>
      )
    }
  ]
}
