import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'

import { pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './embed.module.css'

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <Container fluid={true} justify={'center'}>
    <Grid lg={12} md={12} sm={12} xs={12} className={cn(pb32)}>
      <div className={cn(styles.videoContainer)}>
        <iframe
          className={cn(styles.video)}
          src={`https://www.youtube.com/embed/${embedId}`}
          allowFullScreen
        />
      </div>
    </Grid>
  </Container>
)

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
}

export default YoutubeEmbed
