import React from 'react'
import initStoryshots from '@storybook/addon-storyshots'

jest.mock('@pluralsight/ps-design-system-storybook-addon-center')

jest.mock('../../../stories/focusable', () => props => <div {...props} />)

initStoryshots()
