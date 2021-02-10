import React from 'react'
import cn from 'classnames'
import logo from '../images/logo-ory-footer.svg'
import logoTiny from '../images/logo-ory-footer-tiny.svg'
import styles from './footer.module.css'
import { brandPrefix } from '../config'
import { Link } from 'gatsby'

const comp = [
  {
    items: [
      {
        title: 'About Us',
        href: '/about'
      },
      {
        title: 'Privacy',
        href: 'https://www.ory.sh/privacy'
      },
      {
        title: 'Terms',
        href: 'https://www.ory.sh/tos'
      }
    ]
  }
]

interface MenuItem {
  openInNewWindow?: boolean
  title: string
  href: string
  items: {
    openInNewWindow?: boolean
    title: string
    href: string
  }[]
}

const menu: MenuItem[] = [
  {
    title: 'Product',
    href: '/.next/home',
    items: [
      {
        title: 'Authentication',
        href: '/hydra',
        openInNewWindow: true
      },
      {
        title: 'Authorization',
        href: '/keto'
      },
      {
        title: 'User Management',
        href: '/kratos'
      },
      {
        title: 'Zero Trust',
        href: '/oathkeeper'
      }
    ]
  },
  {
    title: 'Developer',
    href: '/docs',
    items: [
      {
        title: 'Documentation',
        href: '/docs'
      },
      {
        title: 'SDKs',
        href: 'https://github.com/ory/sdk'
      }
    ]
  },
  {
    title: 'Resources',
    href: '/.next/home',
    items: [
      {
        title: 'Docs',
        href: 'https://www.ory.sh/docs'
      },
      {
        title: 'Forum',
        href: 'https://community.ory.sh/'
      },
      {
        title: 'Chat',
        href: 'https://www.ory.sh/chat'
      }
    ]
  },
  {
    title: 'Open Source',
    href: 'https://github.com/ory',
    openInNewWindow: true,
    items: [
      {
        title: `${brandPrefix}Kratos`,
        href: 'https://github.com/ory/kratos',
        openInNewWindow: true
      },
      {
        title: `${brandPrefix}Hydra`,
        href: 'https://github.com/ory/hydra',
        openInNewWindow: true
      },
      {
        title: `${brandPrefix}Oathkeeper`,
        href: 'https://github.com/ory/oathkeeper',
        openInNewWindow: true
      },
      {
        title: `${brandPrefix}Keto`,
        href: 'https://github.com/ory/keto',
        openInNewWindow: true
      }
    ]
  }
]

const Footer = () => (
  <footer className={cn(styles.footer)}>
    <div className="container-fluid">
      <div className="row">
        <div
          className={cn(
            'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10',
            styles.divider
          )}
        />
      </div>

      <div className="row">
        <div className="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          {brandPrefix.length > 0 ? (
            <>
              <img loading="lazy" src={logo} alt={'logo'} />
              <p className={cn(styles.contact)}>
                <a href="mailto:office@ory.sh">office@ory.sh</a>
                <br />
                👋 Say Hello
              </p>
            </>
          ) : (
            <>
              <img loading="lazy" src={logoTiny} alt={'Ory logo'} />
            </>
          )}
        </div>
        <div className="col-lg-offset-1 col-lg-7 col-md-offset-1 col-md-10 col-sm-offset-1 col-md-offset-1 col-sm-10">
          <div className={cn('row', styles.menuRow)}>
            {menu.map(({ title, items, href, openInNewWindow = false }) => (
              <div key={title} className={styles.menuItem}>
                <Link
                  to={href}
                  rel={openInNewWindow ? 'noopener noreferrer' : ''}
                  target={openInNewWindow ? '_blank' : ''}
                >
                  <p className={styles.listTitle}>{title}</p>
                </Link>
                <ul className={styles.list}>
                  {items.map(({ title, href, openInNewWindow = false }) => (
                    <li key={title} className={styles.item}>
                      <Link
                        to={href}
                        rel={openInNewWindow ? 'noopener noreferrer' : ''}
                        target={openInNewWindow ? '_blank' : ''}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className={cn(
            'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10',
            styles.divider
          )}
        />
      </div>

      <div className="row">
        <div className="col-lg-offset-1 col-lg-3 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <p className={styles.copyright}>&copy; Copyright 2021 Ory Corp</p>
        </div>

        <div className="col-lg-6 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
          <div className={cn('row', styles.compRow)}>
            {comp.map(({ items }, index) => (
              <div key={index} className={styles.menuItem}>
                <ul className={styles.list}>
                  {items.map(({ title, href }) => (
                    <li key={title} className={styles.compItem}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
