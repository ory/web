import cn from 'classnames'
import { hexToCSSFilter } from 'hex-to-css-filter/dist/es2015'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { Themes } from '../shared-types'

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
  const [props, setProps] = useState<ColourProps>({})

  useEffect(() => {
    if (window !== undefined) {
      const colourVariables = window.getComputedStyle(document.documentElement)
      const p: ColourProps = {}

      if (text) {
        p.text = colourVariables.getPropertyValue(getVariable(text)).trim()
      }

      if (background) {
        p.background = colourVariables
          .getPropertyValue(getVariable(background))
          .trim()
      }

      if (fill) {
        p.fill = hexToCSSFilter(
          colourVariables.getPropertyValue(getVariable(fill)).trim()
        ).filter
      }

      setProps(p)
    }
  }, [])

  return (
    <Colour className={cn(className && className)} {...props}>
      {children}
    </Colour>
  )
}

export default ColourWrapper
