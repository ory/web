import React from 'react'
import * as styles from './container.module.css'
import cn from 'classnames'

export interface PropTypes {
  children: React.ReactNode
  className?: string
  flexContainer?: 'row' | 'column'
  alignItems?: 'start' | 'center' | 'end'
  justify?: 'center' | 'space-around' | 'space-between' | 'start' | 'end'
  fluid?: false | true
}

const parseCase = (s: string) => {
  const ss = s.split('-');
  let final = '';
  if (ss.length > 0){
    for (const word of ss) {
      final += (word.charAt(0).toUpperCase() + word.slice(1)).replace('-', '');
    }
  }else {
    final += s.charAt(0).toUpperCase() + s.slice(1);
  }
  return final
}

const getFlex = (flex: string) => {
  // @ts-ignore
  return styles[flex]
}

const getAlign = (align: string) => {
  // @ts-ignore
  return styles[`flex-${parseCase}`];
}

const getJustify = (justify: string) => {
  // @ts-ignore
  return styles[`justify${parseCase(justify)}`]
}

const Container = ({
  children,
  className,
  flexContainer = 'row',
  alignItems = 'center',
  justify = 'center',
  fluid = false
}: PropTypes) => (
  <div className={cn(fluid && styles.containerFluid)}>
    <div
      className={cn(
        styles.container,
        flexContainer && getFlex(flexContainer),
        alignItems && getAlign(alignItems),
        justify && getJustify(justify),
        className && className
      )}
    >
      {children}
    </div>
  </div>
)

export default Container
