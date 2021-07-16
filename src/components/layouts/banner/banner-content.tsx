import React from 'react'

import Button from '../../freestanding/button/button'

const ArrowRight = <i className={'base-white ph-arrow-right-bold size16'} />

export const bannerContentJobs = {
  title: "We're hiring!",
  small: true,
  text: (
    <>
      Help us create an open and free standard for authentication and
      authorization that is available to everyone.
    </>
  ),
  button: (
    <>
      <Button to={'/jobs'} theme={'dark'} style={'link'} iconRight={ArrowRight}>
        Join Our Team
      </Button>
    </>
  )
}
