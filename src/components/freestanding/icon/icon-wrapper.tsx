import React from 'react'
import {Themes} from "../shared-types";
import ColourWrapper from "../colour/colour-wrapper";
import {PhosphorIconTypes, PhosphorIcon} from "../../../images/phosphor";
import {PascalToSnake} from "../../../util";
import './icon-wrapper.module.css'

interface PropType {
  icon: PhosphorIconTypes
  size: string
  className?: string
  color?: Themes
  background?: Themes
}

const IconWrapper = ({icon, size, color = 'base-black', background, className}: PropType) => {
  const iconLoaded = PhosphorIcon[icon]
  return (
    <ColourWrapper fill={color} background={background} className={className}>
      <img alt={`phosphor-icon-${PascalToSnake(icon)}`} src={iconLoaded} width={size} height={size}/>
    </ColourWrapper>
  )
}

export default IconWrapper
