import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { Themes } from '../shared-types'
import { hexToCSSFilter } from 'hex-to-css-filter/dist/es2015'

interface PropType {
  children: React.ReactNode
  className?: string
  background?: Themes
  text?: Themes
  fill?: Themes
}

interface ColourProps {
  text?: string
  background?: string
  fill?: string
}

const Colour = styled.div<ColourProps>`
  > * {
    color: ${(props) => props.text || ''};
    background: ${(props) => props.background || ''};
    filter: ${(props) => props.fill || ''};
  }
`

const getVariable = (name: string) => {
  return `--colors-${name}--next`
}

const ColourWrapper = ({
  children,
  className,
  background,
  text,
  fill
}: PropType) => {
  let props: ColourProps = {}
  let colourVariables = getComputedStyle(document.body)

  if (text) {
    props.text = colourVariables.getPropertyValue(getVariable(text)).trim()
  }

  if (background) {
    props.background = colourVariables
      .getPropertyValue(getVariable(background))
      .trim()
  }

  if (fill) {
    props.fill = hexToCSSFilter(
      colourVariables.getPropertyValue(getVariable(fill)).trim()
    ).filter
  }

  return (
    <Colour className={cn(className && className)} {...props}>
      {children}
    </Colour>
  )
}

export default ColourWrapper
