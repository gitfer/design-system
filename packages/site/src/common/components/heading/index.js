import { Heading } from '@pluralsight/ps-design-system-text/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.module.css'

const rmSystemProps = props => {
  const { css, ...rest } = props
  return rest
}

export default styleable(css)(props =>
  <Heading {...rmSystemProps(props)} className={props.css.root}>
    {props.children}
  </Heading>
)