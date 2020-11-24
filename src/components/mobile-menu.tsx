import React, { Component } from 'react'
import cn from 'classnames'
import { Menu, IconMenu } from './header'
import styles from './mobile-menu.module.css'
import { Link } from 'gatsby'

interface PropTypes {
  menu: Menu
  icons: IconMenu
}

interface StateTypes {
  open: boolean
}

class MobileMenu extends Component<PropTypes, StateTypes> {
  state = {
    open: false
  }

  toggle = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  render() {
    const { icons, menu } = this.props
    return (
      <div className="hidden-lg">
        <button
          onClick={this.toggle}
          className={cn(styles.navIcon, { [styles.isActive]: this.state.open })}
          type="button"
        >
          <div />
        </button>
        <div
          className={cn(styles.navItems, { [styles.show]: this.state.open })}
        >
          <div className="container-fluid">
            <div className="col-offset-sm-1 col-sm-10 col-md-offset-1 col-md-10">
              <div className={styles.navContainer}>
                <div className={styles.divider} />
                <ul>
                  {menu.map(({ href, title, className = '', path }, index) => (
                    <li key={`menu-${index}`} className={className}>
                      {path && <Link to={path}>{title}</Link>}
                      {href && <a href={href}>{title}</a>}
                    </li>
                  ))}
                  {icons.map(({ title, href }, index) => (
                    <li key={`icon-${index}`}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileMenu
