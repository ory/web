import React from 'react'

import Button from '../../freestanding/button/button'
import IconWrapper from '../../freestanding/icon/icon-wrapper'

const RocketLaunch = <i className={'base-white ph-rocket-launch size24'} />
const BookOpen = (
  <i className={'base-white ph-book-open ph-book-open-duotone size24'} />
)
const ArrowRight = <i className={'themed-primary ph-arrow-right-bold size16'} />
const Users = (
  <i className={'themed-primary ph-users ph-users-duotone size32'} />
)
const SlackLogo = (
  <i className={'themed-primary ph-slack-logo ph-slack-logo-duotone size32'} />
)
const ChatsCircle = (
  <i
    className={'themed-primary ph-chats-circle ph-chats-circle-duotone size32'}
  />
)

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
        Request Access
      </Button>
    </>
  ),
  content: [
    {
      icon: (
        <i
          className={'themed-primary ph-book-open ph-book-open-duotone size32'}
        />
      ),
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
