import React, { ChangeEvent, MouseEvent, Component, ReactNode } from 'react'
import cn from 'classnames'
import * as styles from './newsletter.module.css'
import VerticalDivider from './vertical-divider'

interface StateTypes {
  email: string
}

const projects = {
  kratos: '&group[17097][4]=1',
  hydra: '&group[17097][8]=1',
  oathkeeper: '&group[17097][16]=1',
  keto: '&group[17097][32]=1',
}

interface PropTypes {
  left?: ReactNode
  light?: boolean
  preselect?: keyof typeof projects
}

class Newsletter extends Component<PropTypes, StateTypes> {
  state = { email: '' }

  private onSubmit = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    window.open(
      'https://ory.us10.list-manage.com/subscribe?u=ffb1a878e4ec6c0ed312a3480&id=f605a41b53&MERGE0=' +
        encodeURIComponent(this.state.email) +
        (this.props.preselect ? projects[this.props.preselect] : '')
    )
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value })
  }

  render() {
    const { left, light } = this.props

    return (
      <div className={cn(styles.newsletter, { [styles.light]: light })}>
        <div className="container-fluid">
          <div className="row">
            <VerticalDivider padding={64} />
            <div className="col-lg-offset-1 col-lg-4  col-md-offset-1 col-md-10  col-sm-offset-1 col-sm-10">
              {left ? (
                left
              ) : (
                <>
                  <h3>Never miss a patch</h3>
                  <p>
                    ORY ships regular product patches and updates. Subscribe to
                    our newsletter to get the good stuff, and stay up to date.
                  </p>
                </>
              )}
            </div>
            <div
              className={cn(
                'col-lg-offset-2 col-lg-4  col-md-offset-1 col-sm-10  col-sm-offset-1 col-sm-10',
                styles.right
              )}
            >
              <h3>Subscribe now</h3>
              <form className={styles.form} onSubmit={this.onSubmit}>
                <input
                  type="email"
                  name={'email'}
                  placeholder={'Enter your email'}
                  required
                  onChange={this.onChange}
                  value={this.state.email}
                />
                <input
                  type="button"
                  name={'submit'}
                  value={'Subscribe'}
                  onClick={this.onSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsletter
