import Button from '../../freestanding/button/button'
import {
  ArrowRight,
  BookOpen,
  ChatsCircle,
  RocketLaunch,
  SlackLogo,
  Users
} from 'phosphor-react'
import React from 'react'
import Quickstart from './quickstart'

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
          to={'https://slack.ory.sh'}
          style={'link'}
          iconRight={<ArrowRight size={16} weight={'bold'} />}
        >
          Join the chat
        </Button>
      )
    }
  ]
}

export const quickstartOpenSource = {
  title: <>Ready to get started?</>,
  description: (
    <>
      Explore Ory and the future of identity. Make yourself heard in discussions
      and contribute directly to Ory on GitHub. Your code will be shipped in the
      next version.
    </>
  ),
  buttons: (
    <>
      <Button
        style={'filled'}
        to={'/docs/ecosystem/projects'}
        iconLeft={<BookOpen size={24} weight={'duotone'} />}
      >
        Documentation
      </Button>
    </>
  ),
  content: [
    {
      icon: <SlackLogo size={32} weight={'duotone'} />,
      title: <>Developer Chat on Slack</>,
      description: (
        <>
          A community to help you succeed. Become a hero for developers, ask
          questions & participate in events.
        </>
      ),
      button: (
        <Button
          to={'https://slack.ory.sh/'}
          style={'link'}
          iconRight={<ArrowRight size={16} weight={'bold'} />}
        >
          Join the chat
        </Button>
      )
    },
    {
      icon: <ChatsCircle size={32} weight={'duotone'} />,
      title: <>GitHub Discussions</>,
      description: (
        <>
          Make yourself heard on GitHub and contribute code and insights to the
          open source projects at the heart of Ory.
        </>
      ),
      button: (
        <Button
          to={'https://github.com/ory/'}
          style={'link'}
          iconRight={<ArrowRight size={16} weight={'bold'} />}
        >
          Explore our GitHub
        </Button>
      )
    }
  ]
}
