import React from 'react'
import cn from 'classnames'
import * as styles from './section.module.css'
import * as projectStyles from './projects.module.css'
import { brandPrefix, projects } from '../config'
import { Link } from 'gatsby'

const Projects = () => (
  <div className={cn(styles.section, styles.dark, 'is-dark-background')}>
    <div className="container-fluid">
      <div className="row">
        <div
          className={
            'col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10'
          }
        >
          <div className="row">
            <h3>Open source projects</h3>
            <p className={projectStyles.information}>
              All of our code is open source, fueled by an engaged community of
              contributors. It is licensed under Apache 2.0 and is available for
              free on GitHub. Our core projects are {brandPrefix}Kratos,{' '}
              {brandPrefix}Hydra, {brandPrefix}Oathkeeper and {brandPrefix}Keto.{' '}
              <a href="https://github.com/ory"> See all our repositories</a>
            </p>
          </div>
          <div className="row">
            <div
              className={`${projectStyles.projects} col-lg-12 col-md-12 col-sm-12`}
            >
              {projects.map(({ title, description, path, id }) => (
                <div className="col-lg-6 col-md-12 col-sm-12" key={title}>
                  <Link
                    className={cn(projectStyles.project, projectStyles[id])}
                    to={path}
                  >
                    <div>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
