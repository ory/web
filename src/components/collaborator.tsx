import React from 'react'
import cn from 'classnames'
import * as styles from './collaborator.module.css'

const Contributors = () => (
  <img
    loading="lazy"
    alt="The Ory Community"
    className="responsive"
    src="https://opencollective.com/ory/contributors.svg?avatarHeight=24&width=540&button=false"
  />
)

const LargeFeature = () => (
  <div className={cn(styles.largeFeature)}>
    <div className="container-fluid">
      <div className={cn('row middle-lg')}>
        <div
          className={
            'col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10 hidden-md hidden-sm'
          }
        >
          <Contributors />
        </div>
        <div
          className={
            'col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'
          }
        >
          <h3>The Ory Community</h3>
          <p>
            The Ory Community stands on the shoulders of individuals, companies,
            and maintainers. We thank everyone involved - from submitting bug
            reports and feature requests, to contributing patches, to sponsoring
            our work.
          </p>
          <p>
            If you like, consider becoming a sponsor or supporter of our open
            source efforts via{' '}
            <a
              href="https://opencollective.com/ory"
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              Open Collective
            </a>{' '}
            or{' '}
            <a
              href="https://www.patreon.com/_ory"
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              Patreon
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default LargeFeature
