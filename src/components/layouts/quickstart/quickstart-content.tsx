import Button from '../../freestanding/button/button'
import React from 'react'
import IconWrapper from '../../freestanding/icon/icon-wrapper'

const RocketLaunch = (
  <IconWrapper color={'base-white'} icon={'RocketLaunch'} size={'24'} />
)
const BookOpen = (
  <IconWrapper color={'base-white'} icon={'BookOpenDuotone'} size={'24'} />
)
const ArrowRight = (
  <IconWrapper color={'themed-primary'} icon={'ArrowRightBold'} size={'16'} />
)
const Users = (
  <IconWrapper color={'themed-primary'} icon={'UsersDuotone'} size={'32'} />
)
const SlackLogo = <IconWrapper color={'themed-primary'} icon={'SlackLogoDuotone'} size={'32'} />
const ChatsCircle = <IconWrapper color={'themed-primary'} icon={'ChatsCircleDuotone'} size={'32'} />

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
        iconLeft={RocketLaunch}
      >
        Get started
      </Button>
    </>
  ),
  content: [
    {
      icon: <IconWrapper color={'themed-primary'} icon={'BookOpenDuotone'} size={'32'} />,
      title: <>Check out our docs</>,
      description: (
        <>
          Visit our documentation to learn more about technical concepts, read
          tutorials and guides as well as an extensive API reference.
        </>
      ),
      button: (
        <Button to={'/docs'} style={'link'} iconRight={ArrowRight}>
          Read the docs
        </Button>
      )
    },
    {
      icon: Users,
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
          iconRight={ArrowRight}
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
        iconLeft={BookOpen}
      >
        Documentation
      </Button>
    </>
  ),
  content: [
    {
      icon: SlackLogo,
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
          iconRight={ArrowRight}
        >
          Join the chat
        </Button>
      )
    },
    {
      icon: ChatsCircle,
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
          iconRight={ArrowRight}
        >
          Explore our GitHub
        </Button>
      )
    }
  ]
}
