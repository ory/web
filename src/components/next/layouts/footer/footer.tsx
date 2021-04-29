import React from 'react'
import * as styles from './footer.module.css'
import cn from 'classnames'
import FooterContentMain from './content/footer-content-main'
import FooterContentCategoryItem from './content/footer-content-category-item'
import FooterContentCategory from './content/footer-content-category'
import FooterContentSub from './content/footer-content-sub'

const links = [
  {
    category: 'Product',
    menuItems: [
      {
        title: 'Ory',
        href: '',
        order: 1
      },
      {
        title: 'Open Source',
        href: '',
        order: 2
      },
      {
        title: 'Hydra',
        href: '',
        order: 3
      },
      {
        title: 'Kratos',
        href: '',
        order: 4
      },
      {
        title: 'Keto',
        href: '',
        order: 5
      },
      {
        title: 'Oathkeeper',
        href: '',
        order: 6
      },
      {
        title: 'Dockertest',
        href: '',
        order: 7
      },
      {
        title: 'Pricing',
        href: '',
        order: 8
      }
    ]
  },
  {
    category: 'Developers',
    menuItems: [
      {
        title: 'Documentation',
        href: '',
        order: 1
      },
      {
        title: 'Community',
        href: '',
        order: 2
      },
      {
        title: 'Learning',
        href: '',
        order: 3
      },
      {
        title: 'GitHub',
        href: '',
        order: 4
      }
    ]
  },
  {
    category: 'Company',
    menuItems: [
      {
        title: 'Blog',
        href: '',
        order: 1
      },
      {
        title: 'About Us',
        href: '',
        order: 2
      },
      {
        title: 'Jobs',
        href: '',
        order: 3
      },
      {
        title: 'Contact Us',
        href: '',
        order: 4
      }
    ]
  }
]

const Footer = () => (
  <div className={cn(styles.footer, styles.footerContainer)}>
    <div className="container-fluid--next">
      <div className={cn(styles.footerContainerContent)}>
        {/*<FooterContentMain className={cn(styles.footerContentMainLogo)}>
        <span>logo</span>
      </FooterContentMain>*/}
        <FooterContentMain className={cn(styles.footerContentMainLinks)}>
          {links.map((category) => {
            return (
              <FooterContentCategory key={category.category}>
                <p className={'font-p-sm'}>{category.category}</p>
                {category.menuItems.map((link) => {
                  return (
                    <FooterContentCategoryItem key={link.title}>
                      <a href={link.href}>{link.title}</a>
                    </FooterContentCategoryItem>
                  )
                })}
              </FooterContentCategory>
            )
          })}
        </FooterContentMain>
        <FooterContentSub>
          <p className="font-p-sm">© Copyright 2021 Ory Corp</p>
        </FooterContentSub>
      </div>
    </div>
  </div>
)

export default Footer
