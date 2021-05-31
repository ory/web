import Button from '../../freestanding/button/button'
import { ArrowRight, BookOpen, RocketLaunch, Users } from 'phosphor-react'
import React from 'react'

export const quickstartDefault = {
  title: <>Ready to get started?</>,
  description: (
    <>
      Explore Ory and the future of identity. Contact us for a custom support
      package for your business.
    </>
  ),
  buttons: (
    <>
      <Button
        style={'filled'}
        to={'https://console.ory.sh/registration'}
        iconLeft={<RocketLaunch size={24} />}
      >
        Get started
      </Button>
    </>
  ),
  content: [
    {
      icon: <BookOpen size={32} weight={'duotone'} />,
      title: <>Check out our docs</>,
      description: (
        <>
          Visit our documentation to learn more about technical concepts, read
          tutorials and guides as well as an extensive API reference.
        </>
      ),
      button: (
        <Button
          to={'/docs'}
          style={'link'}
          iconRight={<ArrowRight size={16} weight={'bold'} />}
        >
          Read the docs
        </Button>
      )
    },
    {
      icon: <Users size={32} weight={'duotone'} />,
      title: <>Join a diverse community</>,
      description: (
        <>
          Make yourself heard in chat and contribute code and insights to the
          open source projects at the heart of Ory.
        </>
      ),
      button: (
        <Button
          to={'/chat'}
          style={'link'}
          iconRight={<ArrowRight size={16} weight={'bold'} />}
        >
          Join the chat
        </Button>
      )
    }
  ]
}
