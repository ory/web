import React from 'react'

import Button from '../../freestanding/button/button'

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
const PaperPlaneTilt = (
  <i
    className={
      'base-white ph-paper-plane-tilt ph-paper-plane-tilt-duotone size32'
    }
  />
)
const UsersThree = (
  <i
    className={'themed-primary ph-users-three ph-users-three-duotone size32'}
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
        iconRight={RocketLaunch}
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
        iconRight={BookOpen}
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
          Explore our codebase
        </Button>
      )
    }
  ]
}

export const quickstartAbout = {
  title: <>Get to know us</>,
  description: (
    <>
      Ory is open. Get to know us by trying out the Ory Cloud Platform, working
      with us on Ory Open Source, or joining a conversation on Ory Slack or our
      GitHub Discussions. And we are hiring.
    </>
  ),
  buttons: (
    <>
      <Button
        style={'filled'}
        to={'mailto:office@ory.sh'}
        iconRight={PaperPlaneTilt}
      >
        Contact us
      </Button>
    </>
  ),
  content: [
    {
      icon: UsersThree,
      title: <>Work for Ory</>,
      description: (
        <>
          We are looking for collaborators and colleagues to build Ory with us.
          We work together, learn, and grow as a team.
        </>
      ),
      button: (
        <Button to={'/jobs'} style={'link'} iconRight={ArrowRight}>
          Join the team
        </Button>
      )
    },
    {
      icon: SlackLogo,
      title: <>Chat with us directly</>,
      description: (
        <>
          Join the Ory Community of developers, makers, and creators.
          Contribute, ask the experts, and participate in events.
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
    }
  ]
}

export const quickstartJobs = {
  title: <>Be part of a global community</>,
  description: (
    <>
      Explore the Ory ecosystem and the work we do in open source. Participate
      in discussions and contribute directly to Ory on GitHub. We love hiring
      open source contributors to work with us full time.
    </>
  ),
  buttons: (
    <>
      <Button
        style={'filled'}
        to={'/docs/ecosystem/community'}
        iconRight={BookOpen}
      >
        Community Overview
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
          Explore our codebase
        </Button>
      )
    }
  ]
}
