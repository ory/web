import React from 'react'
import { Themes } from '../shared-types'
import ColourWrapper from '../colour/colour-wrapper'
import { PhosphorIconTypes } from './phosphor'
import * as PhosphorIcon from './phosphor'
import { PascalToSnake } from '../../../util'
import * as styles from './icon-wrapper.module.css'
import cn from 'classnames'

interface PropType {
  icon: PhosphorIconTypes
  size: string
  className?: string
  color?: Themes
  background?: Themes
}

const IconWrapper = ({
  icon,
  size,
  color = 'base-black',
  background,
  className
}: PropType) => {
  // @ts-ignore
  const iconLoaded = PhosphorIcon[icon]
  return (
    <ColourWrapper
      fill={color}
      background={background}
      className={cn(styles.icon, className && className)}
    >
      <img
        className={cn(styles.icon)}
        loading="lazy"
        alt={`phosphor-icon-${PascalToSnake(icon)}`}
        src={iconLoaded}
        width={size}
        height={size}
      />
    </ColourWrapper>
  )
}

export default IconWrapper
