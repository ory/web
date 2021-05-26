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

type Sizes =
  | 2
  | 4
  | 6
  | 8
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32
  | 34
  | 36
  | 38
  | 40
  | 42
  | 44
  | 46
  | 48
type Positions = 'top' | 'bottom' | 'left' | 'right'

interface StyledBorder {
  width?: string
  style: 'solid' | 'dotted' | 'double'
  color?: Themes
}

interface StylingProps {
  border?: StyledBorder
}

const getColorVariable = (name: string | undefined) => {
  return `--colors-${name}--next`
}

const Style = styled.div<StylingProps>`
  ${(props) =>
    `border: ${props.border?.width} ${
      props.border?.style
    } var(${getColorVariable(props.border?.color)})` || ''};
`

interface PropTypes {
  children: React.ReactNode
  className?: string
  styles: StylingProps
}

export const Styling = ({ children, className, styles }: PropTypes) => (
  <Style className={cn(className && className)} {...styles}>
    {children}
  </Style>
)
