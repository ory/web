import React from 'react'
import { brandPrefix, projects } from '../config'
import ThinProject from './thin-project'

const ThinProjectList = () => (
  <div>
    {projects.map(({ id, descriptiveTitle, description, path, visual }) => (
      <ThinProject
        key={id}
        href={path}
        theme={id}
        title={descriptiveTitle}
        description={description}
        learn={`Explore ${brandPrefix} ${id}`}
        visual={visual}
      />
    ))}
  </div>
)

export default ThinProjectList
