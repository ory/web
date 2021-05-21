import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'

type Greys = '25' | '50' | '75' | '200' | '400' | '600' | '800' | '900'
type ThemeTypes = 'primary' | 'dark' | 'light' | 'darkmode' | 'background'
type Base = 'base-white' | 'base-black' | 'base-grey' | `base-grey-${Greys}`
type Themes =
  | `themed-${ThemeTypes}`
  | `info-${ThemeTypes}`
  | `success-${ThemeTypes}`
  | `warning-${ThemeTypes}`
  | `error-${ThemeTypes}`
  | `hydra-${ThemeTypes}`
  | `kratos-${ThemeTypes}`
  | `keto-${ThemeTypes}`
  | `dockertest-${ThemeTypes}`
  | `oathkeeper-${ThemeTypes}`
  | Base

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
    color: var(${(props) => props.text || ''});
    background: var(${(props) => props.background || ''});
    /*filter: var(${(props) => props.fill || ''});*/
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

  if (text) {
    props.text = getVariable(text)
  }

  if (background) {
    props.background = getVariable(background)
  }

  if (fill) {
    props.fill = getVariable(fill)
  }

  return (
    <Colour className={cn(className && className)} {...props}>
      {children}
    </Colour>
  )
}

export default ColourWrapper
