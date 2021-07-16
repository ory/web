import cn from 'classnames'
import React from 'react'

import Container from '../../freestanding/containers/container'
import Grid from '../../freestanding/containers/grid'
import SmallText from '../simple-text/small-text'

import { pb64 } from '../../freestanding/utils/padding.module.css'
import * as styles from './team.module.css'

interface PropTypes {
  title: string
  text: React.ReactElement
  img: any
}

const TeamImage = ({ title, text, img }: PropTypes) => (
  <div className={cn(styles.team, styles.teamImage)}>
    <Container fluid={true} justify={'center'} alignItems={'start'}>
      <Grid lg={8} md={10} sm={12} xs={12}>
        <SmallText
          small={true}
          title={`${title}`}
          text={<>{text}</>}
          className={pb64}
        />
        <Container alignItems={'start'} justify={'start'}>
          <Grid lg={12} md={12} sm={12} xs={12}>
            {img}
          </Grid>
        </Container>
      </Grid>
    </Container>
  </div>
)

export default TeamImage
