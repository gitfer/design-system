import core from '@pluralsight/ps-design-system-core'

export const BASE_CLASSNAME = '.psds-halo'

export default {
  [BASE_CLASSNAME]: {
    position: 'relative',
    display: 'inline-block',
    lineHeight: 0,

    '&:after': {
      content: ' ',
      position: 'absolute',
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: core.colors.blue,
      pointerEvents: 'none',
      visibility: 'hidden'
    }
  },

  [`${BASE_CLASSNAME}--error`]: {
    '&:after': {
      visibility: 'visible',
      borderColor: core.colors.red
    }
  },

  [`${BASE_CLASSNAME}--visible`]: {
    '&:after': {
      visibility: 'visible',
      borderColor: core.colors.blue
    }
  },

  [`${BASE_CLASSNAME}--visible-on-focus`]: {
    '&:focus-within:after, &[focus-within]:after': {
      visibility: 'visible',
      borderColor: core.colors.blue
    }
  },

  [`${BASE_CLASSNAME}--gap-size-default${BASE_CLASSNAME}--theme-dark`]: {
    '&:after': {
      top: '-4px',
      bottom: '-4px',
      left: '-4px',
      right: '-4px'
    }
  },
  [`${BASE_CLASSNAME}--gap-size-default${BASE_CLASSNAME}--theme-light`]: {
    '&:after': {
      top: '-5px',
      bottom: '-5px',
      left: '-5px',
      right: '-5px'
    }
  },
  [`${BASE_CLASSNAME}--gap-size-small${BASE_CLASSNAME}--theme-dark`]: {
    '&:after': {
      top: '-4px',
      bottom: '-4px',
      left: '-4px',
      right: '-4px'
    }
  },
  [`${BASE_CLASSNAME}--gap-size-small${BASE_CLASSNAME}--theme-light`]: {
    '&:after': {
      top: '-2px',
      bottom: '-2px',
      left: '-2px',
      right: '-2px'
    }
  },

  [`${BASE_CLASSNAME}--shape-default`]: {
    '&:after': {
      borderRadius: '4px'
    }
  },

  [`${BASE_CLASSNAME}--shape-pill`]: {
    '&:after': {
      borderRadius: '1000px' // use a big number to make a pill shape
    }
  }
}
