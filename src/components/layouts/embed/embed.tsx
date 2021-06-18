import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import cn from 'classnames'
import * as styles from './embed.module.css'
import { pb32 } from '../../freestanding/utils/padding.module.css'

const YoutubeEmbed = ({ embedId }) => (
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
