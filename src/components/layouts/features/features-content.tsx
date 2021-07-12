import React from 'react'

import Button from '../../freestanding/button/button'
import IconWrapper from '../../freestanding/icon/icon-wrapper'

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

export const featuresDefault = {
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
          Ory's heart and soul are rooted in open source. Our commitment to open
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
