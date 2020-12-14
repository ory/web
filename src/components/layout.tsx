import React, { ReactNode } from 'react'

import { Menu, IconMenu } from './header'
import Header from './header'
import Announcement from './announcement'
import Footer from './footer'
import GDPR from './gdpr'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-shell-session'

const defaultMenu: Menu = [
  { title: 'Docs', href: '/docs' },
  { title: 'Blog', path: '/blog' },
  { title: 'Jobs', href: 'https://github.com/ory/jobs' },
  {
    title: 'Support',
    href: 'https://github.com/ory/open-source-support/blob/master/README.md'
  }
]

const defaultIconMenu = ({
  githubLink = 'https://github.com/ory',
  discussionsLink
}: {
  discussionsLink?: string
  githubLink?: string
}): IconMenu => {
  if (discussionsLink) {
    return [
      { title: 'Chat', href: 'https://www.ory.sh/chat' },
      { title: 'Discussions', href: discussionsLink },
      { title: 'GitHub', href: githubLink }
    ]
  }

  return [
    { title: 'Chat', href: 'https://www.ory.sh/chat' },
    { title: 'GitHub', href: githubLink }
  ]
}

const Layout = ({
  children,
  menu = defaultMenu,
  icons = defaultIconMenu,
  announcement,
  appendix = '',
  theme = 'default',
  githubLink,
  discussionsLink
}: {
  children: ReactNode
  menu?: Menu
  icons?: typeof defaultIconMenu
  announcement?: ReactNode
  theme?: string
  appendix?: string
  githubLink?: string
  discussionsLink?: string
}) => (
  <div className={`theme-${theme}`}>
    {announcement ? <Announcement>{announcement}</Announcement> : null}
    <Header
      appendix={appendix}
      menu={menu}
      icons={icons({ githubLink, discussionsLink })}
    />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
