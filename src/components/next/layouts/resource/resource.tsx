import React from 'react'
import * as styles from './resource.module.css'
import cn from 'classnames'
import ResourceInner from './content/resource-inner'
import { ArrowRight } from 'phosphor-react'
import Molecule from '../../freestanding/molecule/molecule'
import MoleculeInteraction from '../../freestanding/molecule/molecule-interaction'
import ResourceBox from './content/resource-box'

const resources = [
  {
    title: 'Security infrastructure for global internet services.',
    linkTitle: 'Resources',
    linkIcon: ArrowRight
  },
  {
    title: 'Security infrastructure for global internet services.',
    linkTitle: 'Resources',
    linkIcon: ArrowRight
  },
  {
    title: 'Security infrastructure for global internet services.',
    linkTitle: 'Resources',
    linkIcon: ArrowRight
  },
  {
    title: 'Security infrastructure for global internet services.',
    linkTitle: 'Resources',
    linkIcon: ArrowRight
  }
]

const Resource = () => (
  <div className={cn(styles.resource, styles.resourceContainer)}>
    <div className="container-fluid--next">
      <div className={cn(styles.resourceTitleContainer)}>
        <div
          className={cn(
            styles.resourceTitle,
            'col-lg-8--next col-md-8--next col-sm-4--next col-xs-4--next'
          )}
        >
          <p className="font-h2">
            Very smart headline lorem ipsum dolor sit amet adipiscent.
          </p>
        </div>
      </div>
      <ResourceInner
        className={cn('col-lg-3--next col-md-4--next col-sm-4--next')}
      >
        {resources.map((resource) => {
          return (
            <ResourceBox key={resource.title}>
              <Molecule>
                <p className="font-h3">{resource.title}</p>
              </Molecule>
              <MoleculeInteraction>
                <a className="font-link font-link-md">{resource.linkTitle}</a>
                {/*{resource.linkIcon}*/}
              </MoleculeInteraction>
            </ResourceBox>
          )
        })}
      </ResourceInner>
    </div>
  </div>
)

export default Resource
