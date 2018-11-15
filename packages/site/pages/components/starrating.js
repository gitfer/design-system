import React from 'react'

import * as Text from '@pluralsight/ps-design-system-text/react'
import StarRating from '@pluralsight/ps-design-system-starrating/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="StarRating">
      <PageHeading packageName="starrating">StarRating</PageHeading>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-starrating
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        import StarRating from '@pluralsight/ps-design-system-starrating/react'
      </Code>

      <PropTypes
        props={[
          PropTypes.row([
            'onChange',
            '(number, Event) => ()',
            null,
            null,
            'triggered when the value changes'
          ]),
          PropTypes.row([
            'value',
            'number',
            null,
            null,
            'current value as a float'
          ])
        ]}
      />

      <SectionHeading>Values and Rounding</SectionHeading>
      <P>
        Provide a <Text.Code>value</Text.Code> with the rating. Values are
        rounded down to the nearest half.
      </P>
      <Example.React
        themeToggle
        includes={{ StarRating }}
        orient="vertical"
        codes={[
          `<StarRating value={3} />`,
          `<StarRating value={3.4} />`,
          `<StarRating value={3.5} />`,
          `<StarRating value={3.9} />`,
          `<StarRating value={4} />`
        ]}
      />

      <SectionHeading>Mode</SectionHeading>
      <P>
        Mode is determined by the presence of the{' '}
        <Text.Code>onChange</Text.Code> prop. When a function is provided the
        component will become interactive.
      </P>
      <Example.React
        themeToggle
        includes={{ StarRating }}
        codes={[
          `<StarRating value={2.5} onChange={val => alert("The new value is: " + val)} />`
        ]}
      />
    </Content>
  </Chrome>
))