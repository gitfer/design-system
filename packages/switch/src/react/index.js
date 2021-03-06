import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'
import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import PropTypes from 'prop-types'
import React from 'react'

import css from '../css'
import * as vars from '../vars'

const styles = {
  switch: ({ disabled, labelAlign }) =>
    glamor.css(
      css['.psds-switch'],
      css[`.psds-switch--labelAlign-${labelAlign}`],
      disabled && css['.psds-switch--disabled'],
      {
        ':focus': css['.psds-switch:focus']
      }
    ),
  track: ({ checked, color, disabled, error, isFocused, size, themeName }) =>
    glamor.css(
      css['.psds-switch__track'],
      checked &&
        css[`.psds-switch__track--checked.psds-switch__track--color-${color}`],
      css[`.psds-switch__track.psds-switch__track--size-${size}`]
    ),
  thumb: ({ checked, size }) =>
    glamor.css({
      ...css[`.psds-switch__thumb`],
      ...css[`.psds-switch__thumb--size-${size}`],
      ...(checked
        ? css[`.psds-switch__thumb--checked.psds-switch__thumb--size-${size}`]
        : null)
    }),
  label: ({ labelAlign, size, themeName }) =>
    glamor.css({
      ...css['.psds-switch__label'],
      ...css[`.psds-switch__label--size-${size}`],
      ...css[
        `.psds-switch__label--size-${size}.psds-switch__label--labelAlign-${labelAlign}`
      ],
      ...css[`.psds-switch__label.psds-theme--${themeName}`]
    }),
  checkbox: _ => glamor.css(css['.psds-switch__checkbox'])
}

class Switch extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)

    this.state = { isFocused: false }
  }

  handleClick() {
    this.props.onClick(!this.props.checked)
  }

  handleFocus() {
    this.setState(_ => ({ isFocused: true }))
  }

  handleBlur() {
    this.setState(_ => ({ isFocused: false }))
  }

  render() {
    const themeName = this.context.themeName || themeDefaultName
    const { isFocused } = this.state

    const { children, disabled, error } = this.props
    const allProps = { ...this.props, themeName }

    const switchProps = {
      ...styles.switch(allProps),
      ...(allProps.style ? { style: allProps.style } : null),
      ...(allProps.className ? { className: allProps.className } : null),
      ...(!disabled && {
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onFocus: this.handleFocus
      }),
      tabIndex: disabled ? '-1' : allProps.tabIndex || '0'
    }

    return (
      <button {...switchProps} aria-checked={allProps.checked} role="checkbox">
        <Halo error={error} shape={Halo.shapes.pill} visible={isFocused}>
          <div {...styles.track(allProps)}>
            <div {...styles.thumb(allProps)} />
          </div>
        </Halo>

        <input
          tabIndex="-1"
          type="checkbox"
          readOnly
          checked={allProps.checked}
          {...styles.checkbox(allProps)}
        />

        {children && <label {...styles.label(allProps)}>{children}</label>}
      </button>
    )
  }
}

Switch.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(vars.colors)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  labelAlign: PropTypes.oneOf(Object.keys(vars.labelAligns)),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.keys(vars.sizes))
}

Switch.defaultProps = {
  checked: false,
  color: vars.colors.orange,
  disabled: false,
  error: false,
  labelAlign: vars.labelAligns.right,
  size: vars.sizes.large
}

Switch.contextTypes = {
  themeName: PropTypes.string
}

Switch.colors = vars.colors
Switch.sizes = vars.sizes
Switch.labelAligns = vars.labelAligns

export const colors = vars.colors
export const sizes = vars.sizes
export const labelAligns = vars.labelAligns

export default Switch
